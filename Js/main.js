const productos= [
    {id: 1, producto: "zapatillas nike1", marca: "nike", precio: 4400},
    {id: 2, producto: "zapatillas nike2", marca: "nike", precio: 4850},
    {id: 3, producto: "zapatillas adidas", marca:"adidas", precio: 4000},
    {id: 4, producto: "zapatillas converse", marca:"converse", precio: 2800},
    {id: 5, producto: "zapatillas rebook", marca: "rebook", precio: 2500}];
const zapatillasNike = productos.find(producto=>producto.marca==="nike");
console.log(zapatillasNike)

const menorPrecio= productos.filter(producto=>producto.precio < 3000)
console.log(menorPrecio)

const iva= productos.map(producto=>producto.precio * 1.21)
console.log(iva);

productos.sort((a,b)=>{
    if(a<b){
    return -1
    }
    else(a>b)
    {return 1;}
    
    return 0;
})
console.log(productos)