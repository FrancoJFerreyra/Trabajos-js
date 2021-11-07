let cart = [];
$("#cart").append(`<div id="cartWindow"></div>`);
let cartWindow = $("#cartWindow");

//Funcion de actualizar, funcion de remover, subir al storage, crear las cards que esten vayan al carrito, en la funcion de actualizar agregar el lenght para que indique el numero de productos.


let showCart = $("#cart").click(()=>{
        $("#cartWindow").show()
    }
    )

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
                            <img src="${producto.image}" class="card-img-top">
                                <div class="card-body">
                                <h5 class="card-title">${producto.productName}</h5>
                                <button id=${producto.id} class="btnBuyItem">Agregar al carrito </button>
                                <p class="priceParagraph">$${producto.price}</p>
                                
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


// EVENTO QUE AL CLICKEAR AGARRA LA CARD Y  FUNCION QUE TRAE LOS DATOS QUE LUEGO PERMITEN CREAR LA CARD
$(".btnBuyItem").click(function addProductCart(e) {
    const button = e.target;
    const item = button.closest(".card");
    const itemTitle = item.querySelector(".card-title").textContent;
    const itemPrice = item.querySelector(".priceParagraph").textContent;
    const itemImg = item.querySelector(".card-img-top").src;
        const newItem = {
            title: itemTitle,
            price: itemPrice,
            img: itemImg,
            quantity: 1
        }
    addItem(newItem)
})
//ESTA FUNCION AGREGA LAS CARDS EN EL CARRITO PERO NO LAS RENDERIZA
const addItem = (newItem) => {
    // const inputQuantity = $(".inputQuantity")
    // for(let i = 0; i < cart.length; i++){
    //     if(cart[i].title.trim() === newItem.title.trim()){
    //         cart[i].quantity++;
    //         let inputValue = inputQuantity[i].value;
    //         inputValue ++;
    //         console.log(cart);
    //         return null;
    //     }
    // }
    cart.push(newItem)
    renderCart()
}
//ESTA FUNCION RENDERIZA LAS CARDS EN EL CARRITO
const renderCart = () =>{
    cart.map(item => { 
        const divItemCart = $(`<div class="divItemCart"></div>`)
        const content = `<div class="cardCart">
    <img src="${item.img}" class="card-img-cart">
        <div class="card-body-cart">
        <h5 class="card-title-cart">${item.title}</h5>
        <p class="priceParagraph">${item.price}</p>
        <input type="number" min="1" value=${item.quantity} class="inputQuantity">
        <button class="delete btn btn-danger">X</button>
    </div>
</div>`;
divItemCart.append(content).html();
cartWindow.append(divItemCart);
})
}



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
    
