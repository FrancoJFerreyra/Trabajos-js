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
const modeloEquivocado= "El modelo especificado no corresponde";

    if (filtrarMarca == "nike"){
        let opcionNike= prompt(modelo + " " + nikeAir );

            if(opcionNike==="1"){
                alert(precioZapatilla + " " + "$"+zapatillasNike.precio)
            }
            else{
                alert(modeloEquivocado);
            }

    }
    else if(filtrarMarca == "adidas") {
        let opcionAdidas= prompt(modelo + " " + adidasG);

        if(opcionAdidas== "1"){
            alert(precioZapatilla + " " + "$"+zapatillasAdidas.precio)
    }
    else{
        alert(modeloEquivocado);
    }

}
else if(filtrarMarca == "new balance"){
    let opcionNewBalance= prompt(modelo + " " + NBPink);

        if(opcionNewBalance== "1"){   
            alert(precioZapatilla + " " + "$"+zapatillasNB.precio)
    }
    else{
        alert(modeloEquivocado);
    }
}
else if(filtrarMarca == "converse"){
    let opcionConverse= prompt(modelo + " " + converse);

        if(opcionConverse=="1"){
            alert(precioZapatilla + " " + "$"+zapatillasConverse.precio)
    }
    else{
        alert(modeloEquivocado);
    }
}
else if(filtrarMarca == "fila") {
    let opcionFila= prompt(modelo + " " + fila);

        if(opcionFila== "1"){
        alert(precioZapatilla + " " + "$"+zapatillasFila.precio)
    }
    else{
        alert(modeloEquivocado);
    }
}
else if(filtrarMarca == "puma") {
    let opcionPuma= prompt(modelo + " " + puma);

        if (opcionPuma== "1"){
        alert(precioZapatilla + " " + "$"+zapatillasPuma.precio)
    }
    else{
        alert(modeloEquivocado);
    }
}
else
    {
        alert("El modelo especificada no corresponde")
}

// const menorPrecio= productos.filter(producto=>producto.precio < 3000)
// console.log(menorPrecio)

// const iva= productos.map(producto=>producto.precio * 1.21)
// console.log(iva);

// productos.sort((a,b)=>{
//     if(a.precio<b.precio){
//     return -1
//     }
//     else(a.precio>b.precio)
//     {return 1;}
    
//     return 0;
// })
// console.log(productos)