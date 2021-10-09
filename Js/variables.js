const zapatillasNike = productos.find(producto=>producto.marca==="NIKE");
const zapatillasAdidas = productos.find(producto=>producto.marca==="ADIDAS");
const zapatillasNB = productos.find(producto=>producto.marca==="NEW BALANCE");
const zapatillasConverse = productos.find(producto=>producto.marca==="CONVERSE");
const zapatillasFila = productos.find(producto=>producto.marca==="FILA");
const zapatillasPuma = productos.find(producto=>producto.marca==="PUMA");

const precioZapatilla= "El precio de su zapatilla es de";
const salir="2-Salir"
const error="Su respuesta no corresponde a ninguna de las opciones";

let boton = document.getElementById("botonCarrito")