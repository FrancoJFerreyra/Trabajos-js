const students = (a,b,c) => {return (a + b) / c;}

let note1  = 6;
let note2 = 8;
let numberOfNotes = 2;

let result = students(note1, note2, numberOfNotes);
 
console.log(result);

// Complementario
const dues = (a,b) => a / b;

let productPrice = prompt( "Ingrese el precio del producto");
let amountFees = prompt("Ingrese la cantidad de cuotas");

let totalPrice = dues (productPrice, amountFees);

console.log (totalPrice);