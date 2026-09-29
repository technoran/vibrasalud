const VIBRA_CONFIG = {
  address: "Dirección a confirmar · Argentina",
  mapQuery: "Vibra Salud coworking",
};

const professionals = [
  {
    name: "Od. Sofia Villarnovo",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Odontolopediatria, Ortopedia",
    coverages: ["OSDE","MEDIFE", "OMINT","SANCOR SALUD","CAJA NOTARIAL", "FEDERADA SALUD","JERARQUICOS SALUD", "PODER JUDICIAL", "Swiss Medical", "Particular"],
    contactUrl: "https://sofia.technoransuite.com.ar/",
    photo: "image/sofiVilla.jpg",
    bio: " Matricula: 10232, Atención odontológica integral en un entorno tranquilo y cercano.",
  },
  {name: "Od. Sofia Buri",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Tratamientos de Conducto, Dolor Orofacial, Bruxismo y Trastornos en la ATM",
    coverages: [],
    contactUrl: "https://wa.me/5493534139992",
    photo: "image/Buri.png",
    bio: "Matricula: 10405, Consultas para prevención, salud bucal y tratamientos estéticos.",},

    {name: "Od. Santiago Zunino",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Odontología general, Implantes, Cirugías, Rehabilitaciónes complenjas",
    coverages: [],
    contactUrl: "https://wa.me/5493534211642",
    photo: "image/santiago_zunino.png",
    bio: "Matricula: 10405, Consultas para prevención, salud bucal y tratamientos estéticos.",},

  {name: "Od. Paviotti Luciano",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Odontología Estetica, Odontologia General, Rehabilitaciónes Integrales",
    coverages: ["SOS SALUD", "OSDE", "NOBIS SALUD"],
    contactUrl: "https://wa.me/5493534212929",
    photo: "image/luciano_pavi.jpeg",
    bio: "Matricula: 1634, Consultas para prevención, salud bucal y tratamientos.",},

    {
    name: "Lic. Carignano Yanina",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Nutrición antiinflamatorias, Nutricion Oncologica, General.",
    coverages: [],
    contactUrl: "https://wa.me/5493534296964",
    photo: "image/yanin_ca.jpg",
    bio: "Matricula: 2475, Especialista en Nutrición antiinflamatoria, abordaje nutricional en patologias digestivas y alimentacion oncologica. Nutricion personalizada para acompañarte a sentirte mejor y cuidar tu salud.",
  },

  {
    name: "Lic. Virginia Rubiano",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Nutricion Deportiva, Obesidad, Nutricion General",
    coverages: [],
    contactUrl: "https://virginia.technoransuite.com.ar/",
    photo: "image/vir_rubi.jpg",
    bio: "Matricula: 4456, Controles de salud.",
  },
  {
    name: "Lic. Valeria Torres",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Nutricion Deportiva, Nutricion General",
    coverages: [""],
    contactUrl: "https://wa.me/5493534183659",
    photo: "image/vale_torres.JPG",
    bio:  "Controles de salud.",},
  {
    name: "Lic. Valentina Bria",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Pscico-nutricion, Nutricion General",
    coverages: [""],
    contactUrl: "https://wa.me/5493534419937",
    photo: "image/valentina_bria.jpg",
    bio:  "Matricula: 5052, Controles de salud.",},  
  {
    name: "Lic. Camila Bonoris",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Psicologia para mujeres, Vinculos, Duelos, Ansiedad",
    coverages: [""],
    contactUrl: "https://wa.me/5493534209963",
    photo: "image/cami.jpg",
    bio: "Matricula: 12812.",
  },
  {
    name: "Lic. Aldana Schiapparelli",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Psicologia Gestalt - Jovenes y Adultos.",
    coverages: [""],
    contactUrl: "https://wa.me/5493537593863",
    photo: "image/aldana.jpg",
    bio: "Matricula: 12910.",
  },
  {
    name: "Lic. Valle Bournissen",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Especialista en adolecencia, Psicologia para jovenes y adultos",
    coverages: [""],
    contactUrl: "https://wa.me/5493644221124",
    photo: "image/valle.jpg",
    bio: "Matricula: 5165.",
  },
  {
    name: "Dra. Gabriela Segovia",
    specialty: "Estetica",
    key: "estetica",
    focus: "Medicina Estetica Facial",
    coverages: [],
    contactUrl: "https://wa.me/5493515159602",
    photo: "image/gab.jpg",
    bio: `Matrícula: 41993.<br>
Toxina botulínica: TERCIO SUPERIOR (frente, entrecejo y patitas de gallo).<br>
SONRISA GINGIVAL<br>
BRUXISMO<br>
HIPERHIDROSIS AXILAR<br>
MENTÓN EN EMPEDRADO O CELULITIS DEL MENTÓN<br>
NEFERTITIS<br>
ARRUGAS PERIBUCALES o CÓDIGO DE BARRAS<br>
DEPRESIÓN DE COMISURAS LABIALES.<br>
Diseño de labios: DISTINTOS OBJETIVOS, SE PUEDE DAR VOLUMEN, HIDRATAR, REDEFINIR CONTORNO O CORREGIR ASIMETRÍAS.<br>
Rinomodelación: MEJORA EL PERFIL NASAL Y ELEVA LA PUNTA.<br>
Armonización facial: La armonización facial es un enfoque integral para resaltar tu belleza natural. Con técnicas mínimamente invasivas, se busca equilibrar las proporciones del rostro, suavizar rasgos y restaurar la juventud, obteniendo resultados sutiles y armoniosos. Para ello se combina el uso de toxina botulínica, bioestimuladores de colágeno y ácido hialurónico, que se decide con la previa valoración del paciente.<br>
Bioestimuladores de Colágeno: RADIESSE<br>
SCULPTRA<br>
HARMONYCA<br>
LONG LASTING<br>
PROFHILO<br>
Mesoterapia facial: Nctf 135 AH: (5mg/ml de ácido hialurónico no reticulado + 59 ingredientes revitalizantes (vitaminas, minerales, aminoácidos, coenzimas))<br>
Plasma rico en plaquetas: es un derivado de la sangre que estimula la producción de colágeno, elastina y tejido epidérmico, por lo que con su utilización se consigue una piel más tersa, luminosa y de mejor calidad.`,
},
{
    name: "Carignano Yanina",
    specialty: "Estetica",
    key: "estetica",
    focus: "Depilacion Definitiva Soprano ICE",
    coverages: [""],
    contactUrl: "https://wa.me/5493534296964",
    photo: "image/yanin_ca.jpg",
    bio: "Operado por profesionales de la salud.",
  },
  {
    name: "Dra. Giuliana Zucotti",
    specialty: "Estetica",
    key: "estetica",
    focus: "Medicina Estetica y Tricologia",
    coverages: [""],
    contactUrl: "https://wa.me/5492664157173",
    photo: "image/giuliana.jpg",
    bio: "Matricula: 40707, Armonizacion facial, Tratamientos capilares regenerativos.",
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