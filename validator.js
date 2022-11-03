/* eslint-disable no-console */

const validator = {
isValid: function (cardNumber) {
//convertimos a array
let arrayFirst=Array.from(cardNumber);
console.log(arrayFirst);
//revertir array
const reversedArray= arrayFirst.reverse();
console.log (reversedArray);
//string a numeros
let arrayTwo =[];
for (let i=0;i<arrayFirst.length;i++){
arrayTwo.push(parseInt(reversedArray[i]));
}
console.log(arrayTwo);
// recorrer el array identificando num en posicion impar para JS
let finalResult = 0;
for(let i= 0;i<arrayTwo.length;i++){
    if(i % 2!==0){
// multiplicar*2 los digitos de PA y sumar los digitos mayores a 10
        arrayTwo[i] = arrayTwo[i]*2;
        if (arrayTwo[i] >=10){
            arrayTwo[i]=arrayTwo[i]-9;
        }
    }
// sumar todos los numeros del array
    finalResult =finalResult+ arrayTwo[i];
}
// suma total debe ser multiplo de 10 para ser tarjeta valida
if (finalResult % 10===0) {
console.log(true);
    return true;
} else {
console.log(false);
    return false;
}
},
maskify:function (cardNumber){
    let maskedNum = Array.from(cardNumber);
    let stringNum;
    for(let i = 0; i < maskedNum.length-4; i++){
    maskedNum[i]= '#';
    }
    stringNum= maskedNum.join("");
    console.log(stringNum);
    return stringNum;
}
}
export default validator;