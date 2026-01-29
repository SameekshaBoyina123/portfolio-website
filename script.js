// Check JS connection
alert("JavaScript is working!");
console.log("JavaScript connected");

// Run JS only AFTER HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ------------------------------
  // DOM Manipulation
  // ------------------------------
  const heading = document.getElementById("mainHeading");
  if (heading) {
    heading.style.color = "blue";
  }

  // ------------------------------
  // Show / Hide About Section
  // ------------------------------
  const toggleBtn = document.getElementById("toggleBtn");
  const aboutSection = document.getElementById("about");

  if (toggleBtn && aboutSection) {
    toggleBtn.addEventListener("click", function () {
      if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
      } else {
        aboutSection.style.display = "none";
      }
    });
  }

  // ------------------------------
  // Form Validation
  // ------------------------------
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMsg");

  if (form && messageBox) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (email === "" || !email.includes("@")) {
        showMessage("Please enter a valid email address", "red");
        return;
      }

      if (message.length < 10) {
        showMessage("Message must be at least 10 characters", "red");
        return;
      }

      showMessage("Message sent successfully!", "green");
      form.reset();
    });
  }

  // ------------------------------
  // Reusable Function
  // ------------------------------
  function showMessage(text, color) {
    messageBox.textContent = text;
    messageBox.style.color = color;
  }

  // ------------------------------
  // Dark / Light Mode with Local Storage
  // ------------------------------
  window.toggleDarkMode = function () {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
  };

  // Load saved dark mode
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

});
