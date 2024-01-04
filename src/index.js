// js/main.js

function navigateToHome() {
  fetchPage("./index.html");
}

function navigateToDetails() {
  fetchPage("pages/details.html");
}

function fetchPage(page) {
  fetch(page)
      .then(response => response.text())
      .then(html => {
          document.getElementById("app").innerHTML = html;
      })
      .catch(error => console.error("Error fetching page:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  navigateToHome();
  navigateToDetails();
});
