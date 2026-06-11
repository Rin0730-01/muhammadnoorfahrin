const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const backTop = document.querySelector(".back-top");
const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window.addEventListener("scroll", () => {
  if (!backTop) return;
  backTop.classList.toggle("show", window.scrollY > 450);
});

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thank you. Your message has been prepared for review.";
    contactForm.reset();
  });
}

function openModal(src){

    document.getElementById("imageModal").style.display = "block";

    document.getElementById("modalImage").src = src;
}

function closeModal(){

    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(event){

    const modal = document.getElementById("imageModal");

    if(event.target === modal){

        modal.style.display = "none";

    }

}

function openModal(src){

    document.getElementById("imageModal").style.display = "block";

    document.getElementById("modalImage").src = src;
}

function closeModal(){

    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(event){

    const modal =
        document.getElementById("imageModal");

    if(event.target === modal){

        modal.style.display = "none";

    }

}
