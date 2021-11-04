let cart = [];
$("#cart").prepend(`<div id="cartWindow"></div>`);
let cartWindow = $("#cartWindow");

//Funcion de actualizar, funcion de remover, subir al storage, crear las cards que esten vayan al carrito, en la funcion de actualizar agregar el lenght para que indique el numero de productos.




// // const URLGET = `http://hp-api.herokuapp.com/api/characters`;

// $("#button").prepend(`<span class="badge bg-secondary">${array.length}</span>`)

let showCart = $("#cart").click(()=>{
        $("#cartWindow").show()
    }
    )

// let cartItems=()=>{
//     createCard()
// }
// const URLGET = `http://hp-api.herokuapp.com/api/characters`;
// $("#cart").click(()=>
// $.get(URLGET,function(respuesta,estado){
//     console.log(respuesta[0])
//     $("#cart").append(
//         `<div><img src="${respuesta[0].image}"</img></div>`
//     )
// }))


//INDICADOR DE CANTIDAD DE PRODUCTOS EN EL CARRITO

let itemsCart = $("quantityCart");
itemsCart+= $(`${cart.lenght}`).html();

//FUNCION CREAR CARDS

const contenedor = document.getElementById('contenedor');

Object.keys(dataPorMarca).forEach((marca, index) => {
    contenedor.innerHTML += `
        <section class="publications publications--background${index + 1}">
            <h1>${marca}</h1>
            <div class="card__mark--margin">
                ${dataPorMarca[marca].reduce((productos, producto) => {
                    productos += `
                    
                        <div class="card">
                            <img src="${producto.image }" class="card-img-top">
                                <div class="card-body">
                                <h5 class="card-title">${producto.productName}</h5>
                                <button id=${producto.id} class="btnBuyItem">Agregar al carrito </button>
                                <p>$${producto.price}</p>
                                
                            </div>
                        </div>
                    
                    `;
                    return productos;
                }, '')}
            </div>
        </section>
    `
});

console.log(dataPorMarca["ADIDAS"][0])

let cartContent = () =>{
    cart = localStorage.getItem("cart");
    if (!cart){
        alert(`No hay objetos en el carrito`);
    }
    else{
        cart = JSON.parse(cart);
        showCart;
    };
};



$(".btnBuyItem").click(function addProductCart(e) {
    const button = e.target;
    const item = button.closest(".card");
    console.log(item);

        cartWindow.append(`<div class="cardCart">
        <img src="${data.image}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${data.productName}</h5>
            <p>$${data.price}</p>
            
        </div>
    </div>`).html;
})    
    // let addItemCart = () =>  {
    //     console.log(cartWindow)
    // }

    // addItemCart()



    
    // const itemTitle = item.querySelector(".card-title").textContent;
    // const itemPrice = item.querySelector("p").textContent;
    // const itemImg = item.querySelector("img").src;
    // console.log(itemImg);

    // addItemCart(item)

    // function addItemCart(newItem) {
        
    //     cart.push(newItem);
    //     renderCart();
        
    // }

    // function renderCart() {
    //     cartWindow.innerHTML = " ";
    //     cart.map(item => {
    //         const divItemsCart = document.createElement("div"); 
    //         divItemsCart.innerHTML = item;
    //            cartWindow.append((divItemsCart)) 
    //         })
    
