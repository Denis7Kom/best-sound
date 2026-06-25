const data = window.BEST_SOUND_DATA;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuBtn = qs("#menuBtn");
const navLinks = qs("#navLinks");
const concertGrid = qs("#concertGrid");
const serviceGrid = qs("#serviceGrid");
const tourList = qs("#tourList");
const newsGrid = qs("#newsGrid");
const partnerTrack = qs("#partnerTrack");
const toast = qs("#toast");
const leadForm = qs("#leadForm");
const modal = qs("#concertModal");
const modalClose = qs("#modalClose");
const searchInput = qs("#eventSearch");
const contactEmail = qs("#contactEmail");
const contactEmailLink = qs("#contactEmailLink");
const officialSource = qs("#officialSource");
const sourceNote = qs("#sourceNote");

let activeFilter = "all";
let activeSearch = "";

const iconPaths = {
  booking: "M15 18h34v28H15z M22 18v-5h20v5 M23 28h18 M23 36h12",
  tour: "M16 44c8-18 25-26 42-26 M18 44h12 M46 18h12 M30 38c8 4 15 4 23-2",
  production: "M18 42h28 M24 42l5-22h6l5 22 M14 22h36 M17 30h30",
  venue: "M14 45h40 M18 45V26l16-10 16 10v19 M26 45V32h16v13",
  promo: "M16 36l26-14v28L16 36z M42 25h8v22h-8 M20 38l4 11",
  brand: "M32 14l6 12 14 2-10 10 3 14-13-7-13 7-14-10-10 14-2z"
};

function getContactEmail() {
  return `${data.contacts.emailUser}@${data.contacts.emailDomain}`;
}

function closeMenu() {
  navLinks.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  navLinks.classList.add("active");
  menuBtn.setAttribute("aria-expanded", "true");
}

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("active");
  isOpen ? closeMenu() : openMenu();
});

qsa("#navLinks a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();

    if (modal.open) {
      modal.close();
    }
  }
});

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
});

function serviceIcon(type) {
  return `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="${iconPaths[type] || iconPaths.production}" />
    </svg>
  `;
}

function getFilteredConcerts() {
  return data.concerts.filter((concert) => {
    const matchesFilter = activeFilter === "all" || concert.category === activeFilter;
    const haystack = `${concert.title} ${concert.subtitle} ${concert.city} ${concert.venue} ${concert.type} ${concert.status}`.toLowerCase();
    const matchesSearch = haystack.includes(activeSearch.toLowerCase().trim());
    return matchesFilter && matchesSearch;
  });
}

function renderConcerts() {
  const concerts = getFilteredConcerts();

  if (!concerts.length) {
    concertGrid.innerHTML = `
      <div class="empty-state">
        <strong>Ничего не найдено</strong>
        <span>Измени фильтр или поисковый запрос.</span>
      </div>
    `;
    return;
  }

  concertGrid.innerHTML = concerts.map((concert, index) => `
    <article class="event-card reveal is-visible" data-category="${concert.category}">
      <div class="event-date">
        <span>${concert.month}</span>
        <strong>${concert.day}</strong>
      </div>
      <div class="event-main">
        <div class="event-kicker">${concert.city} · ${concert.venue}</div>
        <h3>${concert.title}</h3>
        <p>${concert.subtitle}</p>
        <div class="chips">
          ${concert.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="event-side">
        <span class="status">${concert.status}</span>
        <button class="btn btn-primary" type="button" data-open-concert="${concert.id}">Подробнее</button>
      </div>
      <span class="event-index">${String(index + 1).padStart(2, "0")}</span>
    </article>
  `).join("");

  qsa("[data-open-concert]").forEach((button) => {
    button.addEventListener("click", () => openConcertModal(button.dataset.openConcert));
  });
}

function renderServices() {
  serviceGrid.innerHTML = data.services.map((service) => `
    <article class="service-card reveal">
      <div class="service-icon">${serviceIcon(service.icon)}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>
  `).join("");
}

function renderTour() {
  tourList.innerHTML = data.tourPoints.map((point, index) => `
    <article class="timeline-row reveal">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${point.city}</strong>
      <em>${point.date}</em>
      <small>${point.role}</small>
    </article>
  `).join("");
}

function renderNews() {
  newsGrid.innerHTML = data.news.map((item) => `
    <article class="news-card reveal">
      <span>${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a href="#contacts">Обсудить проект</a>
    </article>
  `).join("");
}

function renderPartners() {
  const items = [...data.partners, ...data.partners];
  partnerTrack.innerHTML = items.map((item) => `<span>${item}</span>`).join("");
}

function renderContacts() {
  const email = getContactEmail();

  if (contactEmail) {
    contactEmail.textContent = email;
  }

  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${email}`;
    contactEmailLink.textContent = email;
  }

  if (officialSource) {
    officialSource.href = data.source.url;
  }

  if (sourceNote) {
    sourceNote.textContent = `${data.contacts.sourceNote} Дата проверки: ${data.source.checkedAt}.`;
  }
}

function openConcertModal(id) {
  const concert = data.concerts.find((item) => item.id === id);
  if (!concert) return;

  qs("#modalMeta").textContent = `${concert.date} · ${concert.city} · ${concert.venue}`;
  qs("#modalTitle").textContent = concert.title;
  qs("#modalDescription").textContent = concert.description;
  qs("#modalChips").innerHTML = concert.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
  qs("#modalType").textContent = concert.type;
  qs("#modalStatus").textContent = concert.status;

  modal.showModal();
}

function buildLeadMessage(payload) {
  return [
    "Заявка с сайта BEST SOUND",
    "",
    `Имя: ${payload.name || "—"}`,
    `Телефон: ${payload.phone || "—"}`,
    `Email: ${payload.email || "—"}`,
    `Тип клиента: ${payload.clientType || "—"}`,
    `Город: ${payload.city || "—"}`,
    `Дата: ${payload.date || "—"}`,
    `Бюджет: ${payload.budget || "—"}`,
    "",
    `Описание: ${payload.message || "—"}`
  ].join("\n");
}

modalClose.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!isInDialog) {
    modal.close();
  }
});

qsa(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    qsa(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderConcerts();
  });
});

searchInput.addEventListener("input", (event) => {
  activeSearch = event.target.value;
  renderConcerts();
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const payload = Object.fromEntries(formData.entries());
  const email = getContactEmail();
  const subject = encodeURIComponent("Заявка с сайта BEST SOUND");
  const body = encodeURIComponent(buildLeadMessage(payload));

  leadForm.reset();
  toast.classList.add("active");

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  window.setTimeout(() => {
    toast.classList.remove("active");
  }, 4200);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function hydrateReveals() {
  qsa(".reveal").forEach((element) => observer.observe(element));
}

renderConcerts();
renderServices();
renderTour();
renderNews();
renderPartners();
renderContacts();
hydrateReveals();
