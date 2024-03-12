const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const caret = document.querySelector(".caret");
  const menu = document.querySelector(".menu");
  const options = document.querySelectorAll(".menu li");
  const selected = document.querySelector(".selected");
  select.addEventListener("click", () => {
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.classList.remove("placeholder");
      selected.innerText = option.innerText;
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => option.classList.remove("active"));
      option.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".links a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      // Remove active class from all links
      links.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});
function resetForm() {
  // Get all form elements and reset their values
  var formElements = document
    .getElementById("enroll")
    .querySelectorAll("input, textarea, select");
  formElements.forEach(function (element) {
    // Check if it's a dropdown, reset the selected index to the placeholder
    if (element.tagName.toLowerCase() === "select") {
      element.selectedIndex = 0;
    } else {
      // For other elements, reset their values
      element.value = "";
    }
  });
}
