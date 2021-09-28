let nombre= prompt("Por favor ingrese su nombre");
alert ("Buen dia" + " " + nombre.toUpperCase());

const listaMarcas= ["1-Nike ","2-New Balance ", "3-Adidas ", "4-Converse ","5-Fila ", "6-Puma " ]
alert("A continuación verá la lista de marcas:" + " " + listaMarcas.toString())

const productos= [{id: 1, producto: "Air Jordan High 1 Panda", marca: "NIKE", precio: 4400},
{id: 2, producto: "New Balance 530 Pink", marca: "NEW BALANCE", precio: 4850},
{id: 3, producto: "Adidas Gazelle Unisex", marca:"ADIDAS", precio: 4000},
{id: 4, producto: "Converse All Star Blue", marca:"CONVERSE", precio: 2800},
{id: 5, producto: "Fila Disruptor", marca: "FILA", precio: 2500},
{id: 6, producto: "Classic Puma Pink", marca: "PUMA", precio: 3500}
];  

let filtrarMarca = prompt("Ingrese la marca de zapatillas");
console.log (filtrarMarca.toUpperCase());

let modelo = "Seleccione un modelo de zapatilla entre los disponibles"
const nikeAir= "\n1-Air Jordan" ;
const adidasG="\n 1-Adidas Gazelle";
const NBPink="\n 1-New Balance 530 Pink";
const converse="\n 1-Converse all star";
const fila= "\n 1-Fila Disruptor";
const puma= "\n 1-Classic Puma Pink";

const zapatillasNike = productos.find(producto=>producto.marca==="NIKE");
const zapatillasAdidas = productos.find(producto=>producto.marca==="ADIDAS");
const zapatillasNB = productos.find(producto=>producto.marca==="NEW BALANCE");
const zapatillasConverse = productos.find(producto=>producto.marca==="CONVERSE");
const zapatillasFila = productos.find(producto=>producto.marca==="FILA");
const zapatillasPuma = productos.find(producto=>producto.marca==="PUMA");

const precioZapatilla= "El precio de su zapatilla es de";
const salir="2-Salir"
const error="Su respuesta no corresponde a ninguna de las opciones";

do{
if (filtrarMarca == "1"){
    let opcionNike= prompt(modelo + " " + nikeAir+ "\n" + salir  );
        if(opcionNike==="1"){
            alert(precioZapatilla + " " + "$"+zapatillasNike.precio)
        }
        else if(opcionNike==="2") break;
    else alert(error);    
}
else if(filtrarMarca == "2") {
    let opcionAdidas= prompt(modelo + " " + adidasG+ "\n" + salir  );

    if(opcionAdidas== "1"){
        alert(precioZapatilla + " " + "$"+zapatillasAdidas.precio)
        }
        else if(opcionAdidas==="2") break;
    else alert(error);   
}
else if(filtrarMarca == "3"){
let opcionNewBalance= prompt(modelo + " " + NBPink+ "\n" + salir  );

    if(opcionNewBalance== "1"){   
        alert(precioZapatilla + " " + "$"+zapatillasNB.precio)
        }
        else if(opcionNewBalance==="2") break;
    else alert(error);   
}
else if(filtrarMarca == "4"){
let opcionConverse= prompt(modelo + " " + converse+ "\n" + salir  );

    if(opcionConverse=="1"){
        alert(precioZapatilla + " " + "$"+zapatillasConverse.precio)
        }
        else if(opcionConverse==="2") break;
    else alert(error);   
}
else if(filtrarMarca == "5") {
let opcionFila= prompt(modelo + " " + fila+ "\n" + salir  );

    if(opcionFila== "1"){
    alert(precioZapatilla + " " + "$"+zapatillasFila.precio)
        }
        else if(opcionFila==="2") break;
    else alert(error);   
}
else if(filtrarMarca == "6") {
let opcionPuma= prompt(modelo + " " + puma+ "\n" + salir  );

    if (opcionPuma== "1"){
    alert(precioZapatilla + " " + "$"+zapatillasPuma.precio)
        }
        else if(opcionPuma==="2") break;
    else alert(error);   
}
else
{
    alert("El modelo o marca especificada no corresponde")
}

continuarComprando= prompt("Desea continuar comprando?");
}while (continuarComprando == "si");


for(const producto of productos ){
    let listaProductos = document.createElement("div");
    listaProductos.innerHTML=
        `<ul>
            <li>
                ID = ${producto.id}, Marca = ${producto.marca}, Modelo = ${producto.producto} Precio = $${producto.precio}
            </li>
        </ul>`
    document.body.appendChild(listaProductos);
}

