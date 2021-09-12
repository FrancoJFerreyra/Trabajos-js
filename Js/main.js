let welcome = "Buen dia";
let name =prompt("Ingresa tu nombre:") ;
let welcomeName = welcome + " " + name;
console.log(welcomeName);

let discount = parseFloat (prompt("Ingrese el descuento que desea (0.2 a 0.8)"));
let product = prompt("Ingrese precio del producto");

for (let discount = 0.2; discount <= 0.8; discount++){
    let result = product * discount;
    console.log (product + " " + "x" + " " + discount + " " + "=" + " "+ result)
}

let user = prompt ("Ingrese su nombre")
while (user != "ESC"){
    switch (user){
        case "franco":
            alert ("Hola Franco");
                break;
        case "tomas":
            alert ("Hola Tutor");
                break;
        case "sol":
            alert ("Hola Sol");
                break;
        default:
            alert ("Usuario desconocido o erroneo");
                break;
    }
    user = prompt ("Ingrese su nombre")
}
console.log (user);
