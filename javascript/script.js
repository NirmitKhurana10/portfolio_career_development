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
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  scrollObserver();
  scrollToTopButtonHandler();
});

// Scroll-to-top functionality
function scrollToTopButtonHandler() {
  const btn = document.getElementById("backToTop");
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  window.onscroll = () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
    highlightSectionInNav();
  };
}

// Nav section highlighting on scroll
function highlightSectionInNav() {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".navbar a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

// Optional: Intersection observer for smooth fade-ins
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

  document
    .querySelectorAll("section")
    .forEach((section) => observer.observe(section));
}
