import validator from './validator.js';
//evento capturar numero de tarjeta
let btnSend = document.getElementById("btn");
btnSend.addEventListener("click", () => {
  getNumber();
});

//funcion para vaidar digitos del numero de tarjeta
function getNumber() {
let cardNumber1 = document.getElementById ("cardNumber").value;
if (cardNumber1.length <10 ){
  alert("Ingrese número de tarjeta válido. Debe contener mínimo 10 dígitos ")
} else if (cardNumber1.length === 16)
alert ("Gracias por apoyar el arte peruano")
else {
  validator.isValid(cardNumber1)
}
}



console.log(validator);
