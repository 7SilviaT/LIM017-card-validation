/* eslint-disable no-console */
import validator from './validator.js';
//evento capturar numero de tarjeta
let btnValidate = document.getElementById("btn");
btnValidate.addEventListener("click",e=>{
  e.preventDefault()
let cardNumber1 = document.getElementById("cardNumber").value;
console.log(cardNumber1);

if (cardNumber1 == ""){
document.getElementById("formInputError").innerHTML = "Por favor ingrese su número de tarjeta";
}
else{
  let validCardUser=validator.isValid(cardNumber1);
  console.log(validCardUser);
  }
})