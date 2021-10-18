// let addToCart=(option, quantity)=>{

// }

 let createCards=()=>{
    for(product of parseProducts) {
        cardsDiv.innerHTML += `<img src="${product.image }" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <button id=${product.id}>Agregar al carrito</button>
        </div>`
    };
 }
// let getCartLocalStorage= () =>{
//     cart =localStorage.getItem('cart') //si no existe cart que sea un array vacio
//     if (!cart){
//         cart=[];
//     }else cart=JSON.parse(cart)
// }