let nombre= prompt("Por favor ingrese su nombre");
alert ("Buen dia" + " " + nombre.toUpperCase());

const listaMarcas= [" Nike "," New Balance ", " Adidas ", " Converse "," Fila ", " Puma " ]
alert("A continuación verá la lista de marcas:" + " " + listaMarcas.toString())

const productos= [
    {id: 1, producto: "Air Jordan High 1 Panda", marca: "NIKE", precio: 4400},
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

    if (filtrarMarca == "nike"){
        let opcionNike= prompt(modelo + " " + nikeAir );

            if(opcionNike==="1"){
                alert(precioZapatilla + " " + "$"+zapatillasNike.precio)
            }

    }
    else if(filtrarMarca == "adidas") {
        let opcionAdidas= prompt(modelo + " " + adidasG);

        if(opcionAdidas== "1"){
            alert(precioZapatilla + " " + "$"+zapatillasAdidas.precio)
    }

}
else if(filtrarMarca == "new balance"){
    let opcionNewBalance= prompt(modelo + " " + NBPink);

        if(opcionNewBalance== "1"){   
            alert(precioZapatilla + " " + "$"+zapatillasNB.precio)
    }

}
else if(filtrarMarca == "converse"){
    let opcionConverse= prompt(modelo + " " + converse);

        if(opcionConverse=="1"){
            alert(precioZapatilla + " " + "$"+zapatillasConverse.precio)
    }

}
else if(filtrarMarca == "fila") {
    let opcionFila= prompt(modelo + " " + fila);

        if(opcionFila== "1"){
        alert(precioZapatilla + " " + "$"+zapatillasFila.precio)
    }

}
else if(filtrarMarca == "puma") {
    let opcionPuma= prompt(modelo + " " + puma);

        if (opcionPuma== "1"){
        alert(precioZapatilla + " " + "$"+zapatillasPuma.precio)
    }

}
else
    {
        alert("El modelo o marca especificada no corresponde")
}

const menorPrecio= productos.filter(producto=>producto.precio < 3000)
console.log(menorPrecio)

const iva= productos.map(producto=>producto.precio * 1.21)
console.log(iva);

productos.sort((a,b)=>{
    if(a.precio<b.precio){
    return -1
    }
    else(a.precio>b.precio)
    {return 1;}
    
    return 0;
})
console.log(productos)





// // DESAFÍO CLASE 4: Simulador interactivo

// const opcion1 = "Panes"
// const opcion2 = "Conservas"

// let pan1 = "Pan de campo"
// let pan2 = "Grisines"
// let pan3 = "Pan barra"
// let pan4 = "Pan de molde"

// let conserva1 = "Confitado de Tomates"
// let conserva2 = "Escabeche de Porotos"
// let conserva3 = "Escabeche de Pencas"
// let conserva4 = "Escabeche de Zanahorias"

// let precio1 = 200
// let precio2 = 100
// let precio3 = 150
// let precio4 = 250

// let precio5 = 300
// let precio6 = 150
// let precio7 = 100
// let precio8 = 150

// let entradaUsuario = parseInt (prompt("Hola, indíquenos el número de la delicia que desea: \n (1)" + opcion1 + "\n (2)" + opcion2))

// let entradaPanes

// let entradaConservas


// if (entradaUsuario === 1) {

//     entradaPanes = parseInt (prompt("¡Hermosa elección!. Ahora ingrese que panificado desea: \n (1)" + pan1 + "\n (2)" + pan2 + "\n (3)" + pan3 + "\n (4)" + pan4))
//     console.log(ingresoPanes (entradaPanes));


//     }else if (entradaUsuario ===2 ){

//         entradaConservas = parseInt (prompt("¡Qué rico!. ¿Qué conservas quiere? \n (1)" + conserva1 + "\n (2)" + conserva2 + "\n (3)" + conserva3 + "\n (4)" + conserva4))
//         console.log(ingresoPanes (entradaConservas));

//     }else if (entradaUsuario > 2 ){ 
//         alert("El producto no existe")
//     }


// function ingresoPanes(entradaPanes) {

//     switch (entradaPanes) {
//         case 1:
//             return pan1 +" $"+ precio1;
//             break;
    
//         case 2:
//             return pan2 +" $"+ precio2;
//             break;
            
//         case 3:
//             return pan3 +" $"+ precio3;
//             break;    
    
//         case 4:
//             return pan4 +" $"+ precio4;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }

// function ingresoConservas(entradaConservas) {

//     switch (entradaConservas) {
//         case 1:
//             return conserva1 +" $"+ precio5;
//             break;
    
//         case 2:
//             return conserva2 +" $"+ precio6;
//             break;
            
//         case 3:
//             return conserva3 +" $"+ precio7;
//             break;    
    
//         case 4:
//             return conserva4 +" $"+ precio8;
//             break;    
        
//         default:
//             return "El producto no existe";
//             break;
//     }
    
// }