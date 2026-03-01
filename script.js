// ===============================
// 🌍 LANGUAGE SYSTEM (EN / FR)
// ===============================

const translations = {
  en: {
    home: "Home",
    destinations: "Destinations",
    packages: "Packages",
    about: "About",
    contact: "Contact",

    heroTitle: "Discover The Beauty Of Algeria",
    heroText: "Luxury tours across Algeria with premium service.",
    bookNow: "Book Now",

    popularDestinations: "Popular Destinations",
    ourPackages: "Our Luxury Packages",
    testimonials: "What Our Clients Say",

    exploreTitle: "Explore Algeria",
    premiumPackages: "Our Premium Travel Packages",

    aboutTitle: "About Algeria Luxury Travel",
    aboutText: "We provide premium tourism services across Algeria with luxury transport, expert guides, and unforgettable experiences.",

    contactTitle: "Contact Us",
    sendMessage: "Send Message"
  },

  fr: {
    home: "Accueil",
    destinations: "Destinations",
    packages: "Offres",
    about: "À Propos",
    contact: "Contact",

    heroTitle: "Découvrez la Beauté de l'Algérie",
    heroText: "Circuits de luxe à travers l'Algérie avec un service premium.",
    bookNow: "Réserver",

    popularDestinations: "Destinations Populaires",
    ourPackages: "Nos Offres de Luxe",
    testimonials: "Ce Que Disent Nos Clients",

    exploreTitle: "Explorez l'Algérie",
    premiumPackages: "Nos Offres de Voyage Premium",

    aboutTitle: "À Propos d'Algeria Luxury Travel",
    aboutText: "Nous offrons des services touristiques premium en Algérie avec transport de luxe, guides experts et expériences inoubliables.",

    contactTitle: "Contactez-nous",
    sendMessage: "Envoyer le message"
  }
};

// ===============================
// 🔄 LANGUAGE SWITCH FUNCTION
// ===============================

function changeLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.getAttribute("data-lang");

    if (translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });
}

// ===============================
// 🌙 DARK / LIGHT MODE SYSTEM
// ===============================

const themeToggle = document.getElementById("themeToggle");

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeToggle.innerText = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.innerText = "☀";
  }
}

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  if (themeToggle) themeToggle.innerText = "🌙";
}

// Load saved language
const savedLanguage = localStorage.getItem("language") || "en";
changeLanguage(savedLanguage);