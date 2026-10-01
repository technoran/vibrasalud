const VIBRA_CONFIG = {
  address: "Carlos Pellegrini 689, Villa Maria, Córdoba, Argentina",
  mapQuery: "Vibra Salud coworking",
};

const professionals = [
  {
    name: "Od. Sofia Villarnovo",
    specialty: "Odontología",
    key: "odontologia",
    focus: " Matricula: 10232<br>Odontopediatria, Ortopedia",
    coverages: ["OSDE","MEDIFE", "OMINT","SANCOR SALUD","CAJA NOTARIAL", "FEDERADA SALUD","JERARQUICOS SALUD", "PODER JUDICIAL", "Swiss Medical", "Particular"],
    contactUrl: "https://odvillarnovosofia.com.ar/",
    photo: "image/sofivilla.jpg",
    bio: "Odontopediatria.<br>Ortopedia-Ortodoncia.<br>Odontología mínima intervención.",
  },
  {name: "Od. Sofia Buri",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Matricula: 10405<br>Tratamientos de Conducto, Dolor Orofacial, Bruxismo y Trastornos en la ATM.",
    coverages: [],
    contactUrl: "https://wa.me/5493534139992",
    photo: "image/buri.png",
    bio: "Consultas para prevención, salud bucal y tratamientos estéticos.",},

    {name: "Od. Santiago Zunino",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Matricula: 10405<br>Odontología general, Implantes, Cirugías, Rehabilitaciónes complejas",
    coverages: [],
    contactUrl: "https://wa.me/5493534211642",
    photo: "image/santiago_zunino.png",
    bio: "Consultas para prevención, salud bucal y tratamientos estéticos.",},

  {name: "Od. Paviotti Luciano",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Matricula: 1634<br>Odontología Estetica, Odontologia General, Rehabilitaciónes Integrales",
    coverages: ["SOS SALUD", "OSDE", "NOBIS SALUD"],
    contactUrl: "https://wa.me/5493534212929",
    photo: "image/luciano_pavi.jpeg",
    bio: "Consultas para prevención, salud bucal y tratamientos.",},

    {
    name: "Lic. Carignano Yanina",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula: 2475<br>Nutrición antiinflamatoria, Nutricion Oncologica, General, Escaneo de composicion corporal.",
    coverages: [],
    contactUrl: "https://wa.me/5493534296964",
    photo: "image/yanin_ca.jpg",
    bio: "Especialista en Nutrición antiinflamatoria, abordaje nutricional en patologias digestivas y alimentacion oncologica. Nutricion personalizada para acompañarte a sentirte mejor y cuidar tu salud.",
  },

  {
    name: "Lic. Virginia Rubiano",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula: 4456<BR>Nutricion Deportiva, Obesidad, Nutricion General",
    coverages: [],
    contactUrl: "https://virginia.technoransuite.com.ar/",
    photo: "image/vir_rubi.jpg",
    bio: "Controles de salud.",
  },
  {
    name: "Lic. Valeria Torres",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula:2150 <br>Nutricion Deportiva, Valoracion activa de la composicion corporal",
    coverages: [""],
    contactUrl: "https://wa.me/5493534183659",
    photo: "image/vale_torres.JPG",
    bio:  "Te acompaño en el proceso de alcanzar tu maximo potencial deportivo, mejorando tu alimentacion, habitos y mindset con mi metodo VACC.",},
  {
    name: "Lic. Valentina Bria",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula: 5052<BR>Alimentación intuitiva y Psiconutrición",
    coverages: [""],
    contactUrl: "https://wa.me/5493534419937",
    photo: "image/valentina_bria.jpg",
    bio:  "Un espacio para hacer las paces con la comida y con tu cuerpo.<br>Te acompaño a construir una relación más amable con ambos, desde una alimantación suficiente, nutritiva, flexible y placentera, sin dietas, prohibiciones ni culpa.",},  
  {
    name: "Lic. Camila Bonoris Mainardi",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Matricula: 12812<br>Psicologia para mujeres:Vinculos, Duelos, Ansiedad",
    coverages: [""],
    contactUrl: "https://wa.me/5493534456983",
    photo: "image/cami.jpg",
    bio: "Abordaje desde Terapias Contextuales, con orientacion en Terapia de Aceptación y Compromiso (ACT).<BR>Un espacio para hacer lugar a lo que sentimos y construir una vida con sentido propio",
  },
  {
    name: "Lic. Aldana Schiapparelli",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Matricula: 12910<br>Psicologia Gestalt - Jovenes y Adultos.",
    coverages: [""],
    contactUrl: "https://wa.me/5493537593863",
    photo: "image/aldana.jpg",
    bio: "",
  },
  {
    name: "Lic. Valle Bournissen",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Matricula: 5165.<br>Especialista en adolescencia, Psicologia para jovenes y adultos",
    coverages: [""],
    contactUrl: "https://wa.me/5493644221124",
    photo: "image/valle.jpg",
    bio: "",
  },
  {
    name: "Dra. Gabriela Segovia",
    specialty: "Estetica",
    key: "estetica",
    focus: "Matrícula: 41993<BR>Medicina Estetica Facial",
    coverages: [],
    contactUrl: "https://wa.me/5493515159602",
    photo: "image/gab.jpg",
    bio: `Tratamientos inyectables esteticos<br>
-Toxina botulínica, Ácido Hialurónico.<br>-Bioestimuladores de colageno.<br>
Todo con un enfoque orientado a lograr la armonizacion facial de cada persona en base a sus indicaciones y necesidades.`,
},
{
    name: "Depilacion Definitiva",
    specialty: "Estetica",
    key: "estetica",
    focus: "Depilacion Soprano ICE",
    coverages: [""],
    contactUrl: "https://wa.me/5493534296964",
    photo: "image/maquina2.jpg",
    bio: "Operado por profesionales de la salud.",
  },
  {
    name: "Dra. Giuliana Zucotti",
    specialty: "Estetica",
    key: "estetica",
    focus: "Matricula: 40707<br>Medicina Estetica y Tricologia",
    coverages: [""],
    contactUrl: "https://wa.me/5492664157173",
    photo: "image/giuliana.jpg",
    bio: "Armonizacion facial, Tratamientos capilares regenerativos.",
  },

];

const specialties = [
  ["Todas", ""],
  ["Odontología", "odontologia"],
  ["Nutrición", "nutricion"],
  ["Estetica", "estetica"],
  ["Psicología", "psicologia"],
 
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
  initializeImageCarousel();
}

function initializeImageCarousel() {
  document.querySelectorAll(".image-carousel").forEach((carousel) => {
    const images = carousel.querySelectorAll("img");
    if (images.length < 2) return;
    let activeIndex = 0;
    setInterval(() => {
      images[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % images.length;
      images[activeIndex].classList.add("is-active");
    }, 4000);
  });
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
  const insuranceFilter = insuranceSelect.closest(".insurance-select");
  const resultCount = document.querySelector("[data-result-count]");
  const emptyState = document.querySelector("[data-empty-state]");
  const clearButton = document.querySelector("[data-clear-filters]");
  const requestedSpecialty = new URLSearchParams(window.location.search).get("especialidad") || "";
  const initialSpecialty = specialties.some(([, key]) => key === requestedSpecialty) ? requestedSpecialty : "";
  const coverages = [...new Set(professionals
    .filter(({ key }) => key === "odontologia")
    .flatMap(({ coverages: items }) => items)
    .filter(Boolean))].sort((a, b) => a.localeCompare(b, "es"));
  let activeSpecialty = initialSpecialty;
  let activeInsurance = "";
  let openProfessional = "";

  insuranceFilter.hidden = activeSpecialty !== "odontologia";

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
    insuranceFilter.hidden = activeSpecialty !== "odontologia";
    if (activeSpecialty !== "odontologia") {
      activeInsurance = "";
      insuranceSelect.value = "";
    }
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
    insuranceFilter.hidden = true;
    insuranceSelect.value = "";
    filterContainer.querySelectorAll("[data-specialty]").forEach((filter) => {
      filter.setAttribute("aria-pressed", String(filter.dataset.specialty === ""));
    });
    renderProfessionals();
  });

  renderProfessionals();
}

initializeSharedElements();