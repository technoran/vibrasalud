const VIBRA_CONFIG = {
  address: "Dirección a confirmar · Argentina",
  mapQuery: "Vibra Salud coworking",
};

const professionals = [
  {
    name: "Dra. Sofia Villarnovo",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Odontología general y estética",
    coverages: ["OSDE", "Swiss Medical", "Particular"],
    contactUrl: "https://sofia.technoransuite.com.ar/",
    photo: "image/sofiaVillarnovo.png",
    bio: "Atención odontológica integral en un entorno tranquilo y cercano. Consultas para prevención, salud bucal y tratamientos estéticos.",
  },
  {name: "Dra. Sofia Buri",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Odontología general y estética",
    coverages: ["OSDE","Particular"],
    contactUrl: "https://wa.me/5493534139992",
    photo: "image/sofiBuri.png",
    bio: "Atención odontológica integral en un entorno tranquilo y cercano. Consultas para prevención, salud bucal y tratamientos estéticos.",},
  {
    name: "Lic. Martina Ríos",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Nutrición clínica y hábitos saludables",
    coverages: ["OSDE", "Galeno", "Particular"],
    contactUrl: "",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=640&h=480&q=85",
    bio: "Acompañamiento nutricional personalizado, con objetivos posibles y hábitos sostenibles para cada etapa de la vida.",
  },
  {
    name: "Dr. Tomás Ferrero",
    specialty: "Oftalmología",
    key: "oftalmologia",
    focus: "Salud visual y controles oftalmológicos",
    coverages: ["Swiss Medical", "PAMI", "Particular"],
    contactUrl: "",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=640&h=480&q=85",
    bio: "Controles de salud visual y orientación oftalmológica con una atención clara, dedicada y centrada en cada paciente.",
  },
  {
    name: "Lic. Sofía Acosta",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Psicoterapia para adultos",
    coverages: ["OSDE", "Galeno", "PAMI", "Particular"],
    contactUrl: "",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=640&h=480&q=85",
    bio: "Un espacio de escucha y acompañamiento para trabajar el bienestar emocional, los vínculos y los desafíos cotidianos.",
  },
  {
    name: "Lic. Joaquín Molina",
    specialty: "Kinesiología",
    key: "kinesiologia",
    focus: "Rehabilitación y movimiento",
    coverages: ["OSDE", "Swiss Medical", "Galeno"],
    contactUrl: "",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=640&h=480&q=85",
    bio: "Evaluación funcional y acompañamiento de procesos de recuperación para volver al movimiento con confianza.",
  },
  {
    name: "Dra. Emilia Duarte",
    specialty: "Dermatología",
    key: "dermatologia",
    focus: "Dermatología clínica",
    coverages: ["Swiss Medical", "Galeno", "Particular"],
    contactUrl: "",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=640&h=480&q=85",
    bio: "Atención dermatológica para el cuidado integral de la piel, con orientación y tratamientos adaptados a cada persona.",
  },
  {
    name: "Dra. Valentina Sosa",
    specialty: "Ginecología",
    key: "ginecologia",
    focus: "Salud ginecológica integral",
    coverages: ["OSDE", "PAMI", "Particular"],
    contactUrl: "",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=640&h=480&q=85",
    bio: "Consultas de salud ginecológica en un espacio de confianza, respeto y escucha atenta en cada etapa.",
  },
];

const specialties = [
  ["Todas", ""],
  ["Odontología", "odontologia"],
  ["Nutrición", "nutricion"],
  ["Oftalmología", "oftalmologia"],
  ["Psicología", "psicologia"],
  ["Kinesiología", "kinesiologia"],
  ["Dermatología", "dermatologia"],
  ["Ginecología", "ginecologia"],
];

function initializeSharedElements() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-address]").forEach((element) => {
    element.textContent = VIBRA_CONFIG.address;
  });

  const map = document.querySelector("[data-map]");
  if (map) {
    map.src = `https://maps.google.com/maps?q=${encodeURIComponent(VIBRA_CONFIG.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    mainNav?.classList.toggle("is-open", !isOpen);
  });

  initializeDirectory();
  initializeMotionEffects();
}

function initializeMotionEffects() {
  const progressTrack = document.createElement("div");
  progressTrack.className = "scroll-progress";
  progressTrack.setAttribute("aria-hidden", "true");
  progressTrack.innerHTML = "<span></span>";
  document.body.prepend(progressTrack);

  const progressFill = progressTrack.firstElementChild;
  let scrollUpdatePending = false;

  function updateScrollState() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    progressFill.style.transform = `scaleX(${progress})`;
    document.body.classList.toggle("has-scrolled", window.scrollY > 12);
    scrollUpdatePending = false;
  }

  window.addEventListener("scroll", () => {
    if (scrollUpdatePending) return;
    scrollUpdatePending = true;
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  const revealTargets = document.querySelectorAll(
    ".intro-grid, .image-story, .values-heading, .value-item, .location-copy, .map-frame, .page-hero-content, .specialty-card, .section-heading-row, .professional-card, .directory-contact-inner, .community-strip-inner"
  );

  if (!("IntersectionObserver" in window)) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
    revealObserver.observe(element);
  });
}

function initializeDirectory() {
  const list = document.querySelector("[data-professional-list]");
  if (!list) return;

  const filterContainer = document.querySelector("[data-specialty-filters]");
  const insuranceSelect = document.querySelector("[data-insurance-filter]");
  const resultCount = document.querySelector("[data-result-count]");
  const emptyState = document.querySelector("[data-empty-state]");
  const clearButton = document.querySelector("[data-clear-filters]");
  const requestedSpecialty = new URLSearchParams(window.location.search).get("especialidad") || "";
  const initialSpecialty = specialties.some(([, key]) => key === requestedSpecialty) ? requestedSpecialty : "";
  const coverages = [...new Set(professionals.flatMap(({ coverages: items }) => items))].sort((a, b) => a.localeCompare(b, "es"));
  let activeSpecialty = initialSpecialty;
  let activeInsurance = "";
  let openProfessional = "";

  filterContainer.innerHTML = specialties.map(([label, key]) => `
    <button class="filter-chip" type="button" data-specialty="${key}" aria-pressed="${key === activeSpecialty}">${label}</button>
  `).join("");

  insuranceSelect.insertAdjacentHTML("beforeend", coverages.map((coverage) =>
    `<option value="${coverage}">${coverage}</option>`
  ).join(""));

  function renderProfessionals() {
    const visibleProfessionals = professionals.filter((professional) => {
      const matchesSpecialty = !activeSpecialty || professional.key === activeSpecialty;
      const matchesInsurance = !activeInsurance || professional.coverages.includes(activeInsurance);
      return matchesSpecialty && matchesInsurance;
    });

    list.innerHTML = visibleProfessionals.map((professional) => {
      const isOpen = openProfessional === professional.name;
      const contactUrl = professional.contactUrl?.trim() || "";
      const contactLink = contactUrl
        ? `<a class="professional-contact" href="${contactUrl}" target="_blank" rel="noopener noreferrer">Contacta <span aria-hidden="true">↗</span></a>`
        : `<span class="professional-contact contact-disabled" aria-disabled="true" title="Agregá el enlace en contactUrl dentro de script.js">Contacta <span aria-hidden="true">↗</span></span>`;
      const detailContactLink = contactUrl
        ? `<a class="button button-dark detail-action" href="${contactUrl}" target="_blank" rel="noopener noreferrer">Contacta <span aria-hidden="true">↗</span></a>`
        : `<span class="button button-dark detail-action contact-disabled" aria-disabled="true" title="Agregá el enlace en contactUrl dentro de script.js">Contacta <span aria-hidden="true">↗</span></span>`;
      return `
        <article class="professional-card${isOpen ? " is-open" : ""}">
          <button class="professional-toggle" type="button" aria-expanded="${isOpen}" aria-label="${isOpen ? "Ocultar" : "Ver perfil de"} ${professional.name}">
            <span class="professional-index">${String(professionals.indexOf(professional) + 1).padStart(2, "0")}</span>
            <span class="professional-main"><span class="professional-name">${professional.name}</span><span class="professional-specialty">${professional.focus}</span></span>
            <span class="professional-coverages">${professional.coverages.map((coverage) => `<span class="coverage-pill">${coverage}</span>`).join("")}</span>
            <span class="professional-chevron" aria-hidden="true">${isOpen ? "×" : "+"}</span>
          </button>
          ${contactLink}
          <div class="professional-detail"${isOpen ? "" : " hidden"}>
            <img class="professional-photo" src="${professional.photo}" alt="Retrato de ${professional.name}" loading="lazy">
            <p class="professional-bio">${professional.bio}</p>
            ${detailContactLink}
          </div>
        </article>
      `;
    }).join("");

    resultCount.textContent = `${visibleProfessionals.length} ${visibleProfessionals.length === 1 ? "profesional" : "profesionales"}`;
    emptyState.hidden = visibleProfessionals.length > 0;
  }

  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-specialty]");
    if (!button) return;
    activeSpecialty = button.dataset.specialty;
    openProfessional = "";
    filterContainer.querySelectorAll("[data-specialty]").forEach((filter) => {
      filter.setAttribute("aria-pressed", String(filter.dataset.specialty === activeSpecialty));
    });
    renderProfessionals();
  });

  insuranceSelect.addEventListener("change", () => {
    activeInsurance = insuranceSelect.value;
    openProfessional = "";
    renderProfessionals();
  });

  list.addEventListener("click", (event) => {
    const toggle = event.target.closest(".professional-toggle");
    if (!toggle) return;
    const name = toggle.querySelector(".professional-name").textContent;
    openProfessional = openProfessional === name ? "" : name;
    renderProfessionals();
  });

  clearButton.addEventListener("click", () => {
    activeSpecialty = "";
    activeInsurance = "";
    openProfessional = "";
    insuranceSelect.value = "";
    filterContainer.querySelectorAll("[data-specialty]").forEach((filter) => {
      filter.setAttribute("aria-pressed", String(filter.dataset.specialty === ""));
    });
    renderProfessionals();
  });

  renderProfessionals();
}

initializeSharedElements();