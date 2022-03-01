import validator from "./validator.js";
// mostrar y ocultar paginas
const btnValid1= document.getElementById("btn1");
btnValid1.addEventListener("click",()=>{
const pageOne=document.getElementById("pageOne");
pageOne.style.display="none";
const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";
});
const btnValid2= document.getElementById("btn3");
btnValid2.addEventListener("click",()=>{
const pageOne=document.getElementById("pageOne");
pageOne.style.display="";
const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
});


//evento capturar numero de tarjeta y pasar por validaciones y mensajes
const btnValidate = document.getElementById("btn");
btnValidate.addEventListener("click",()=>{
  //e.preventDefault()
  let cardNumber= document.getElementById("cardNumber").value;
  let maskedNumber = validator.maskify(cardNumber);
  let validCardUser=validator.isValid(cardNumber);

  if (cardNumber===""){
    document.getElementById("formInputError").innerText = " ❌Por favor ingrese su número de tarjeta";
  }else if (validCardUser===true){
    document.getElementById("formInputValid").innerText = "✔️Su tarjeta " + maskedNumber + " es válida.Gracias por su compra";
  }else{
    document.getElementById("formInputError").innerText = "Su tarjeta " + maskedNumber + " es inválida.Intente nuevamente";
  }
} )
