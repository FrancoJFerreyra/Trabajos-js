let nombre= prompt("Por favor ingrese su nombre");
alert ("Buen dia" + " " + nombre.toUpperCase());

const listaMarcas= ["1-Nike ","2-New Balance ", "3-Adidas ", "4-Converse ","5-Fila ", "6-Puma ", "7-Salir"]
alert("A continuación verá la lista de marcas:" + " " + listaMarcas.toString())


let filtrarMarca = prompt("Ingrese la marca de zapatillas");
console.log (filtrarMarca.toUpperCase());

switchCarrito:
while (filtrarMarca != 7){
    switch(filtrarMarca){
        case "1":
            let opcionNike= prompt(modelo + " " + nikeAir+ "\n" + salir)
        if(opcionNike==="1"){
        alert(precioZapatilla + " " + "$"+zapatillasNike.precio)
            }
            else if(opcionNike==="2")break switchCarrito;
        else alert(error);
    break;
   
    case "2":
        let opcionAdidas= prompt(modelo + " " + adidasG+ "\n" + salir  );
    if(opcionAdidas== "1"){
    alert(precioZapatilla + " " + "$"+zapatillasAdidas.precio)
            }
        else if(opcionAdidas==="2") break switchCarrito;
    else alert(error);   

    break;

    case "3":
        let opcionNewBalance= prompt(modelo + " " + NBPink+ "\n" + salir  );

    if(opcionNewBalance== "1"){   
        alert(precioZapatilla + " " + "$"+zapatillasNB.precio)
            }
            else if(opcionNewBalance==="2") break switchCarrito;
        else alert(error);   
    break;

    case "4":
        let opcionConverse= prompt(modelo + " " + converse+ "\n" + salir  );

    if(opcionConverse=="1"){
    alert(precioZapatilla + " " + "$"+zapatillasConverse.precio)
            }
            else if(opcionConverse==="2") break switchCarrito;
        else alert(error);   
    break;

    case "5":
        let opcionFila= prompt(modelo + " " + fila+ "\n" + salir  );

    if(opcionFila== "1"){
    alert(precioZapatilla + " " + "$"+zapatillasFila.precio)
            }
            else if(opcionFila==="2") break switchCarrito;
        else alert(error);   

    break;

    case "6":
        let opcionPuma= prompt(modelo + " " + puma+ "\n" + salir  );

    if (opcionPuma== "1"){
    alert(precioZapatilla + " " + "$"+zapatillasPuma.precio)
             }
            else if(opcionPuma==="2") break switchCarrito;
        else alert(error);   
    break;

    default: alert(error);
    }
}

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
// let boton= document.getElementById("boton");
// let text= document.createElement("h1");
// let contador= 0;

// boton.onclick = () =>{
//     text.innerHTML += `<h1>Hola Coder ${contador} </h1>`;
//     document.body.appendChild(text);
//     contador++;
// }


