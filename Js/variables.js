let modelo = "Seleccione un modelo de zapatilla entre los disponibles"
const nikeAir= "\n1-Air Jordan" ;
const adidasG="\n 1-Adidas Gazelle";
const NBPink="\n 1-New Balance 530 Pink";
const converse="\n 1-Converse all star";
const fila= "\n 1-Fila Disruptor";
const puma= "\n 1-Classic Puma Pink";

const productos= [{id: 1, producto: "Air Jordan High 1 Panda", marca: "NIKE", precio: 4400},
{id: 2, producto: "New Balance 530 Pink", marca: "NEW BALANCE", precio: 4850},
{id: 3, producto: "Adidas Gazelle Unisex", marca:"ADIDAS", precio: 4000},
{id: 4, producto: "Converse All Star Blue", marca:"CONVERSE", precio: 2800},
{id: 5, producto: "Fila Disruptor", marca: "FILA", precio: 2500},
{id: 6, producto: "Classic Puma Pink", marca: "PUMA", precio: 3500}
];  

const zapatillasNike = productos.find(producto=>producto.marca==="NIKE");
const zapatillasAdidas = productos.find(producto=>producto.marca==="ADIDAS");
const zapatillasNB = productos.find(producto=>producto.marca==="NEW BALANCE");
const zapatillasConverse = productos.find(producto=>producto.marca==="CONVERSE");
const zapatillasFila = productos.find(producto=>producto.marca==="FILA");
const zapatillasPuma = productos.find(producto=>producto.marca==="PUMA");

const precioZapatilla= "El precio de su zapatilla es de";
const salir="2-Salir"
const error="Su respuesta no corresponde a ninguna de las opciones";