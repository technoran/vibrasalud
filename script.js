const VIBRA_CONFIG = {
  address: "Carlos Pellegrini 689, Villa Maria, Córdoba, Argentina",
  mapQuery: "Vibra Salud coworking",
};

const professionals = [
  {
    name: "Od. Sofia Villarnovo",
    specialty: "Odontología",
    key: "odontologia",
    focus: " Matricula: 10232<br>Odontopediatria, Ortopedia y Ortodoncia",
    coverages: ["OSDE","MEDIFE", "OMINT","SANCOR SALUD","CAJA NOTARIAL", "FEDERADA SALUD","JERARQUICOS SALUD", "PODER JUDICIAL", "Swiss Medical", "Particular"],
    contactUrl: "https://odvillarnovosofia.com.ar/",
    photo: "image/villarnoboa.jpg",
    bio: "Odontóloga especializada en Odontopediatría🧸 Mi propósito es acompañar de manera respetuosa a cada niño y su familia a lo largo de su crecimiento y desarrollo, promoviendo hábitos saludables.<br>🦷Atención de bebes, niños y adolescentes<br>🦷Tratamientos de Ortopedia Funcional de los Maxilares y Ortodoncia.<br>Te invito a que juntos construyamos una sonrisa para toda la vida💫",
  },
  {name: "Od. Sofia Buri",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Matricula: 10405<br>Tratamientos de Conducto, Dolor Orofacial, Bruxismo y Trastornos en la ATM.",
    coverages: [],
    contactUrl: "https://wa.me/5493534139992",
    photo: "image/sofiburia.jpg",
    bio: "Me dedico a realizar Tratamientos de Conductos y a abordar el dolor dentario y facial. También me enfoco en Bruxismo, molestias, trabas y ruidos al abrir y cerrar la boca.<br>Busco entender qué está pasando y encontrar el tratamiento más adecuado para cada caso. Me gusta trabajar con paciencia, explicar cada paso y generar un espacio de tranquilidad, especialmente cuando el dolor o el miedo llegan antes que la consulta..",},

    {name: "Od. Santiago Zunino",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Matricula: 10405<br>Odontología general, Implantes, Cirugías, Rehabilitaciónes complejas",
    coverages: [],
    contactUrl: "https://wa.me/5493534211642",
    photo: "image/zuninoa.jpg",
    bio: "Acompaño a mis pacientes en la disintitas etapas de su salud bucal, desde la odontología general hasta tratamientos más complejos como implantes y cirugías.<br>También trabajo en odontología estética y rehabilitaciones protésicas integrales, buscando que cada tratamiento combine funcionalidad, salud y estética, siempre pensando en lo que cada paciente necesita.",},

  {name: "Od. Paviotti Luciano",
    specialty: "Odontología",
    key: "odontologia",
    focus: "Matricula: 1634<br>Odontología Estetica, Odontologia General, Rehabilitaciónes Integrales",
    coverages: ["SOS SALUD", "OSDE", "NOBIS SALUD"],
    contactUrl: "https://wa.me/5493534212929",
    photo: "image/lupavi.jpg",
    bio: "Me gusta recuperar dientes que con el tiempo fueron perdiendo su forma, su color o su funcion, buscando que vuelvan a sentirse y verse natuarles.<br>Pero antes de reconstruir, para mi es fundamental empezar por una boca sana.<br>Por eso, primero trato caries, realizo limpiezas y elimino cualquier foco que pueda generar problemas.<br>Desde esa base, trabajo para devolver el equilibrio, función y naturalidad a cada sonrisa.",},

    {
    name: "Lic. Carignano Yanina",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula: 2475<br>Nutrición antiinflamatoria, Nutricion Oncologica, General, Escaneo de composicion corporal.",
    coverages: [],
    contactUrl: "https://wa.me/5493534296964",
    photo: "image/carignanoa.jpg",
    bio: "Especialista en Nutrición antiinflamatoria, abordaje nutricional en patologias digestivas y alimentacion oncologica. Nutricion personalizada para acompañarte a sentirte mejor y cuidar tu salud.",
  },

  {
    name: "Lic. Virginia Rubiano",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula: 4456<BR>Nutricion Deportiva, Obesidad, Nutricion General",
    coverages: [],
    contactUrl: "https://virginia.technoransuite.com.ar/",
    photo: "image/rubianoa.jpg",
    bio: "Acompaño a corredores y deportistas de equipo a mejorar su alimentación para rendir mejor.<br>También trabajo en procesos de recomposición corporal, siempre desde un abordaje integral<br>Busco que la nutrición se adapte a tu deporte, tus objetivos y tu vida real.<br>Estrategias simples, personalizadas y sostenibles.",
  },
  {
    name: "Lic. Valeria Torres",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula:2150 <br>Nutricion Deportiva, Valoracion activa de la composicion corporal",
    coverages: [""],
    contactUrl: "https://wa.me/5493534183659",
    photo: "image/torresa.JPG",
    bio:  "Te acompaño en el proceso de alcanzar tu maximo potencial deportivo, mejorando tu alimentacion, habitos y mindset con mi metodo VACC.",},
  {
    name: "Lic. Valentina Bria",
    specialty: "Nutrición",
    key: "nutricion",
    focus: "Matricula: 5052<BR>Alimentación intuitiva y Psiconutrición",
    coverages: [""],
    contactUrl: "https://wa.me/5493534419937",
    photo: "image/brianaa.jpg",
    bio:  "Un espacio para hacer las paces con la comida y con tu cuerpo.<br>Te acompaño a construir una relación más amable con ambos, desde una alimantación suficiente, nutritiva, flexible y placentera, sin dietas, prohibiciones ni culpa.",},  
  {
    name: "Lic. Camila Bonoris Mainardi",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Matricula: 12812<br>Psicologia para mujeres:Vinculos, Duelos, Ansiedad",
    coverages: [""],
    contactUrl: "https://wa.me/5493534456983",
    photo: "image/bonoripro.jpg",
    bio: "Abordaje desde Terapias Contextuales, con orientacion en Terapia de Aceptación y Compromiso (ACT).<BR>Un espacio para hacer lugar a lo que sentimos y construir una vida con sentido propio",
  },
  {
    name: "Lic. Aldana Schiapparelli",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Matricula: 12910<br>Psicologia Gestalt - Jovenes y Adultos.",
    coverages: [""],
    contactUrl: "https://wa.me/5493537593863",
    photo: "image/aldanaa.jpg",
    bio: "¡Hola! Soy Aldana Schiapparelli Licenciada en Psicología Gestalt, complementada con el enfoque Cognitivo-Conductual.<br>Mi trabajo se enmarca en una terapia humanista y experiencial, centrada fundamentalmente en el presente, en el aquí y ahora, y en aquello que te urge resolver hoy. Entiendo el espacio terapéutico como una relación sana, cálida y horizontal, libre de asimetrías, donde construimos un vínculo de absoluta confianza.<br>Acompaño a jóvenes y adultos en procesos individuales, tanto en modalidad presencial como online, y también realizo talleres grupales orientados al crecimiento personal.<br>Te invito a coordinar tu turno para comenzar tu proceso.",
  },
  {
    name: "Lic. Valle Bournissen",
    specialty: "Psicología",
    key: "psicologia",
    focus: "Matricula: 5165.<br>Especialista en adolescencia, Psicologia para jovenes y adultos",
    coverages: [""],
    contactUrl: "https://wa.me/5493644221124",
    photo: "image/valleboua.jpg",
    bio: "Hace más de 20 años que trabajo con adolescentes y adultos desde una mirada analítica e integral.<br>Me gusta crear espacios seguros donde poder hablar, sentir, cuestionarse, analizarse y reconstruirse, a tu propio tiempo y sin juicios.",
  },
  {
    name: "Dra. Gabriela Segovia",
    specialty: "Estetica",
    key: "estetica",
    focus: "Matrícula: 41993<BR>Medicina Estetica Facial",
    coverages: [],
    contactUrl: "https://wa.me/5493515159602",
    photo: "image/segoviaa.jpg",
    bio: `Tratamientos inyectables esteticos<br>
-Toxina botulínica, Ácido Hialurónico.<br>-Bioestimuladores de colageno.<br>
Todo con un enfoque orientado a lograr la armonizacion facial de cada persona en base a sus indicaciones y necesidades.`,
},
{
    name: "Depilación Definitiva",
    specialty: "Estetica",
    key: "estetica",
    focus: "Depilación Láser con tecnología Soprano Original",
    coverages: [""],
    contactUrl: "https://wa.me/5493534296964",
    photo: "image/difinitivaa.jpg",
    bio: "Trabajamos con equipos Soprano originales, reconocidos por su tecnología y efectividad.<br>✔️ Tratamientos indoloros<br>✔️Resultados visibles desde la primera sesión, para hombres y mujeres <br>✔️ Tecnología segura y de alta calidad<br>Comenzá tu tratamiento y disfrutá una piel sin vellos y suave por más tiempo.",
  },
  {
    name: "Dra. Giuliana Zucotti",
    specialty: "Estetica",
    key: "estetica",
    focus: "Matricula: 40707<br>Medicina Estetica y Tricologia",
    coverages: [""],
    contactUrl: "https://wa.me/5492664157173",
    photo: "image/zucotia.jpg",
    bio: "Naturalidad, criterio médico y resultados que acompañan<br>Entiendo la medicina estética como una herramienta para mejorar, cuidar y acompañar, no para transformar.<br>Por eso, cada tratamiento comienza con una evaluación personalizada: escuchar qué busca cada paciente, analizar qué necesita realmente y elegir la estrategia más adecuada.<br>Trabajo en tratamientos faciales y corporales, calidad de piel, bioestimulación, toxina botulínica, armonización facial y tratamiento de alopecias y salud capilar, combinando medicina y tecnología con un abordaje responsable.<br>Mi objetivo es lograr resultados naturales, progresivos y armónicos, respetando las características y la identidad de cada persona.<br>Porque una buena estética no debería cambiar quién sos, sino ayudarte a sentirte mejor con vos mismo/a.",
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