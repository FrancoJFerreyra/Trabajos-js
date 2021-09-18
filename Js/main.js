const precioTotal= (a,b,c) => a+b+c;
const resta= (a,b) => a-b;
const descuentoEfectivo= x => x * 0.10;

let arroz= 55;
let pollo= 400;
let salsa= 120;

let precioTotalEfectivo =(resta(descuentoEfectivo( precioTotal(arroz,pollo,salsa))))
console.log(precioTotalEfectivo)

// // Complementario
// const dues = (a,b) => a / b;

// let productPrice = prompt( "Ingrese el precio del producto");
// let amountFees = prompt("Ingrese la cantidad de cuotas");

// let totalPrice = dues (productPrice, amountFees);

// console.log (totalPrice);