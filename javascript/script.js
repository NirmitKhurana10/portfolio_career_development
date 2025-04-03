// Typewriter Effect
const typewriterElement = document.getElementById("typewriter");
const roles = [
  "I am Nirmit Khurana",
  "I am a Developer",
  "I am a Blockchain Enthusiast",
  "I am a Machine Learning Engineer",
  "I am a Football Player",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentText = roles[roleIndex];
  const visibleText = currentText.substring(0, charIndex);
  typewriterElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeLoop, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeLoop, 500);
  }
}

// Scroll-to-top functionality
function scrollToTopButtonHandler() {
  const btn = document.getElementById("backToTop");
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
    highlightSectionInNav();
  });
}

// Nav section highlighting on scroll
function highlightSectionInNav() {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".navbar a");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const targetLink = Array.from(navLinks).find((link) =>
        link.getAttribute("href").includes(`#${section.id}`)
      );
      if (targetLink) targetLink.classList.add("active");
    }
  });
}

// Optional: Intersection observer for fade-ins
function scrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  scrollObserver();
  scrollToTopButtonHandler();
});
