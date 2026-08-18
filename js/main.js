const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector("[data-service-form]");
const formStatus = document.querySelector("[data-form-status]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formStatus.textContent =
      "Demo request ready. This form is not connected yet, so call 701-500-9051 for real contact.";
  });
}
