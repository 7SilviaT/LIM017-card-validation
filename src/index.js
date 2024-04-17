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

const cars = [
  {
      modelo: 'Ford Mustang', millaje: 25000, motor: 5.0, produccion: 2017, precio: 25000,
  },

  {
      modelo: 'Honda Accord', millaje: 10000,  produccion: 2021, precio: 20000,
  },


  {
      modelo: 'Mini Cooper', millaje: 15000, produccion: 2005, precio: 5000,
  },
];

//MAP

const modelos = cars.map((index) => index.modelo);
console.log(modelos);

const euroPriceResult = cars.map((e)=> e.precio *4.17)

console.log(euroPriceResult)


