// Typewriter Loop
const typewriterElement = document.getElementById("typewriter");
const texts = [
  "I am Nirmit Khurana",
  "I am a Developer",
  "I am a blockchain enthusiast",
  "I am a Machine Learning Engineer",
  "I am a Football Player",
];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[index];
  typewriterElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % texts.length;
    setTimeout(type, 1000);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal Animations
const sections = document.querySelectorAll("section");
const reveal = () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add("in-view");
    }
  });
};
window.addEventListener("scroll", reveal);
reveal();

// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
