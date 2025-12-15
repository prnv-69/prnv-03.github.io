// Set copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const roles = [
  "Video Editor",
  "Reel Specialist",
  "Motion Designer",
  "Short-Form Killer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 70;
const delayBetweenRoles = 1400;

const typewriter = document.getElementById("typewriter");

function typeLoop() {
  if (!typewriter) return;

  const current = roles[roleIndex];

  if (!isDeleting) {
    typewriter.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => (isDeleting = true), delayBetweenRoles);
    }
  } else {
    typewriter.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  // Sync glitch text if using ::before / ::after
 typewriter.setAttribute("data-text", typewriter.textContent);

  setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
}

window.addEventListener("load", typeLoop);

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
