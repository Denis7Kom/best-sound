"""Plan and publish a GitHub Release from the first-parent main history."""

import json
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path


def git(*args):
    return subprocess.check_output(["git", *args], text=True, encoding="utf-8").strip()


def plan(baseline, base_version, channel):
    head = git("rev-parse", "HEAD")
    walked = git("rev-list", "--first-parent", "HEAD").splitlines()
    if baseline not in walked:
        raise ValueError("Release baseline must be in the first-parent history")

    components = tuple(int(part) for part in base_version.split("."))
    target = baseline
    pattern = re.compile(r"v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)" + re.escape(channel))
    for tag in git("tag", "--list", "v*").splitlines():
        match = pattern.fullmatch(tag)
        if not match:
            continue
        commit = git("rev-parse", f"refs/tags/{tag}^{{commit}}")
        numbers = tuple(int(part) for part in match.groups())
        if numbers > components and commit in walked[:walked.index(baseline)]:
            components, target = numbers, commit

    rank = 0
    notes = []
    for commit in git("rev-list", "--first-parent", "--reverse", f"{target}..{head}").splitlines():
        message = git("show", "-s", "--format=%B", commit)
        subject = message.splitlines()[0] if message else ""
        match = re.match(r"^([a-z]+)(?:\([^)]+\))?(!)?: \S", subject)
        breaking = re.search(r"^BREAKING[ -]CHANGE: \S", message, re.M)
        bump = 0
        if breaking or (match and match[2]):
            bump = 3
        elif match:
            bump = {"feat": 2, "fix": 1}.get(match[1], 0)
            if match[1] == "docs" and os.getenv("RELEASE_PROFILE_DOCS") == "true":
                files = git("diff", "--name-only", f"{commit}^", commit).splitlines()
                if any(path == "README.md" or path.startswith(".github/assets/") for path in files):
                    bump = 1
        if bump:
            rank = max(rank, bump)
            notes.append(f"- {subject} ({commit[:7]})")

    if not rank:
        return None
    numbers = list(components)
    index = 3 - rank
    numbers[index] += 1
    numbers[index + 1:] = [0] * (2 - index)
    tag = "v" + ".".join(map(str, numbers)) + channel
    return {"tag": tag, "commit": head, "notes": "\n".join(notes) + "\n"}


def publish(release, channel):
    tag, commit = release["tag"], release["commit"]
    if git("tag", "--list", tag):
        raise RuntimeError(f"Tag {tag} already exists outside the release history")
    with tempfile.TemporaryDirectory() as directory:
        notes = Path(directory) / "release-notes.md"
        notes.write_text(release["notes"], encoding="utf-8")
        command = ["gh", "release", "create", tag, "--target", commit, "--title", tag,
                   "--notes-file", str(notes)]
        if channel:
            command.append("--prerelease")
        subprocess.run(command, check=True)


if __name__ == "__main__":
    channel = os.environ.get("RELEASE_CHANNEL", "")
    release = plan(os.environ["RELEASE_BASELINE"], os.environ["RELEASE_BASE_VERSION"], channel)
    if sys.argv[1:] == ["--plan"]:
        print(json.dumps(release))
    elif not sys.argv[1:] and release:
        publish(release, channel)
    elif sys.argv[1:]:
        sys.exit("Usage: release.py [--plan]")
