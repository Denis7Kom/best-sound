const data = window.BEST_SOUND_DATA;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuBtn = qs("#menuBtn");
const navLinks = qs("#navLinks");
const concertGrid = qs("#concertGrid");
const serviceGrid = qs("#serviceGrid");
const tourList = qs("#tourList");
const tourPoints = qs("#tourPoints");
const toast = qs("#toast");
const leadForm = qs("#leadForm");
const modal = qs("#concertModal");
const modalClose = qs("#modalClose");

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

function renderConcerts(filter = "all") {
  const concerts = filter === "all"
    ? data.concerts
    : data.concerts.filter((concert) => concert.category === filter);

  concertGrid.innerHTML = concerts.map((concert) => `
    <article class="card reveal is-visible" data-category="${concert.category}">
      <div class="concert-visual" style="--poster-gradient: ${concert.gradient}">
        <span class="badge">${concert.date} • ${concert.city}</span>
        <div class="poster-title">${concert.title}</div>
      </div>
      <div class="card-body">
        <h3>${concert.subtitle}</h3>
        <p>${concert.description}</p>
        <div class="chips">
          ${concert.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-open-concert="${concert.id}">Подробнее</button>
          <a class="btn btn-ghost" href="#contacts">Заявка</a>
        </div>
      </div>
    </article>
  `).join("");

  qsa("[data-open-concert]").forEach((button) => {
    button.addEventListener("click", () => openConcertModal(button.dataset.openConcert));
  });
}

function renderServices() {
  serviceGrid.innerHTML = data.services.map((service) => `
    <article class="service-card reveal">
      <div class="service-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>
  `).join("");
}

function renderTour() {
  tourList.innerHTML = data.tourPoints.map((point, index) => `
    <article class="reveal">
      <strong>${String(index + 1).padStart(2, "0")} • ${point.city}</strong>
      <span>${point.date} — демо-точка маршрута</span>
    </article>
  `).join("");

  tourPoints.innerHTML = data.tourPoints.map((point) => `
    <g>
      <circle class="tour-point" cx="${point.x}" cy="${point.y}" r="13"></circle>
      <text class="tour-label" x="${point.x + 18}" y="${point.y - 16}">${point.city}</text>
    </g>
  `).join("");
}

function openConcertModal(id) {
  const concert = data.concerts.find((item) => item.id === id);
  if (!concert) return;

  qs("#modalPoster").style.background = concert.gradient;
  qs("#modalMeta").textContent = `${concert.date} • ${concert.city} • ${concert.venue}`;
  qs("#modalTitle").textContent = concert.title;
  qs("#modalDescription").textContent = concert.description;
  qs("#modalChips").innerHTML = concert.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
  qs("#modalTicket").textContent = concert.status === "Билеты скоро" ? "Оставить заявку" : "Запросить условия";

  modal.showModal();
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
    renderConcerts(button.dataset.filter);
  });
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const payload = Object.fromEntries(formData.entries());

  console.info("BEST SOUND lead payload:", payload);

  leadForm.reset();
  toast.classList.add("active");

  window.setTimeout(() => {
    toast.classList.remove("active");
  }, 3600);
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
hydrateReveals();
