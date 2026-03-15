document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const successMessage = document.getElementById("successMessage");

  // Smooth scroll for Register Now button
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();

    if (name === "" || email === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    successMessage.classList.remove("hidden");
    successMessage.textContent = `✅ Thank you, ${name}! You are registered for Silver Oak University Fest.`;

    form.reset();
  });
});
