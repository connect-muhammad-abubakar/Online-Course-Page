// When slider is ON (checked), enable DARK mode
function toggleDarkMode() {
  const isChecked = document.getElementById("darkSwitch").checked;
  document.body.classList.toggle("dark", isChecked); // Dark mode ON when checked
}

// Optional: Keep state on refresh (optional, but useful)
window.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  document.getElementById("darkSwitch").checked = isDark;
  document.body.classList.toggle("dark", isDark);
});

document.getElementById("darkSwitch").addEventListener("change", () => {
  const isChecked = document.getElementById("darkSwitch").checked;
  localStorage.setItem("darkMode", isChecked);
});
function openPopup(courseName) {
  document.getElementById('coursePopup').classList.remove('hidden');
  document.getElementById('popupCourseTitle').innerText = "Enroll in " + courseName;

  const descriptions = {
    "Web Development": "Learn HTML, CSS, JavaScript, and responsive web design.",
    "Digital Marketing": "Master SEO, content strategy, and social media promotion.",
    "Graphic Design": "Design with Canva, Illustrator & create stunning visuals.",
    "Freelancing": "Start your freelancing journey with platforms like Fiverr & Upwork."
  };

  document.getElementById('popupCourseDescription').innerText = descriptions[courseName] || "";
}

function closePopup() {
  document.getElementById('coursePopup').classList.add('hidden');
}
