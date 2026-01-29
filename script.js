// ✅ Check JS connection
console.log("JavaScript connected");

// ------------------------------
// DOM Manipulation
// ------------------------------
const heading = document.getElementById("mainHeading");
heading.style.color = "blue";

// ------------------------------
// Show / Hide About Section
// ------------------------------
const toggleBtn = document.getElementById("toggleBtn");
const aboutSection = document.getElementById("about");

toggleBtn.addEventListener("click", function () {
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
});

// ------------------------------
// Form Validation
// ------------------------------
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!email.includes("@")) {
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
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

// Load saved theme
window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
};
