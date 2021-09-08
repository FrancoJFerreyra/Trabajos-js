let welcome = "Buen dia";
let name =prompt("Ingresa tu nombre:") ;
let welcomeName = welcome + " " + name;
console.log(welcomeName);

let prefix = prompt("Prefijo telefonico (no olvide colocar un + delante del numero)");
let prefixParseint= parseInt(prefix)
let signSum = "+"
if (signSum !=="+"){
    alert ("Olvido colocar el signo +")
}
else if (signSum ==="+" && prefixParseint === 54) {
    alert ("Linea correspondiente a Argentina")
}
else if (signSum ==="+" && prefixParseint === 56){
    alert ("Linea correspondiente a Chile")
}
else {
    alert ("No se realizan envios a su area")
}


let mobileNumber = prompt("Ingresa tu numero de celular");
console.log (mobileNumber)

let age = prompt("Ingresa tu edad")
if (age >= 18){
    alert("Es mayor de edad")
}
else{
    alert("Es menor de edad")
}

let day = prompt("Ingresa fecha de hoy")
const text = "El dia"
const text2 = "no estamos tomando pedidos."
let dayTextText2 = text + " " + day + " " + text2
console.log(dayTextText2)
