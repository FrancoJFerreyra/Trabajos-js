let cart = {};
let modalBody = $(".modal-body");
const containerItem = $('#containerItem');

function renderProductsFromData () {
    const productsHTML = Object.keys(dataPorMarca).map((marca, index) => (`
            <section class="publications publications--background${index + 1}">
                <h1>${marca}</h1>
                <div class="card__mark--margin">
                    ${dataPorMarca[marca].reduce((productos, producto) => {
                        productos += `
                            <div class="card">
                                <img src="${producto.image}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${producto.productName}</h5>
                                    <button id="product-id-${producto.id}" class="btnBuyItem" data-productid="${producto.id}">Agregar al carrito</button>
                                    <p class="priceParagraph">$${producto.price}</p>
                                </div>
                            </div>
                        `;
                        return productos;
                    }, '')}
                </div>
            </section>`
    )).join('');
    containerItem.html(productsHTML);
}
renderProductsFromData();

// Agrega productos al carrito (objeto)
const addProductToCart = (productId) => { // number
    if (cart[productId]) {
        cart[productId] += 1;
    } else {
        cart[productId] = 1;
    }
}

// Remover productos del carrito (objeto)
const removeProductFromCart = (productId) => { // number
    if (typeof cart[productId] === 'undefined') {
        return;
    } else if (cart[productId] > 1) {
        cart[productId] -= 1;
    } else {
        delete cart[productId];
    }
}

const getProduct = (productId) => {
    return data.find((prod) => prod.id === parseInt(productId));
}

function addLocalStorage() {
    localStorage.setItem("cartItem", JSON.stringify(cart))
}

$( window ).on( "load", function () {
    const storage = JSON.parse(localStorage.getItem("cart"));
    if (storage) {
        cart = storage;
        renderCartUI()
    }
})

const createCartProductHTML = (productId) => {
    const productIdAsNumber = parseInt(productId);
    const producto = getProduct(productIdAsNumber);
    return `<div class="card-cart">
    <img src="${producto.image}" class="card-img-cart">
        <div class="card-body-cart">
            <h5 class="card-title-cart">${producto.productName}</h5>
            <p class="priceParagraph">$${producto.price}</p>
            <div class="addQuantityItems">
                <p>Cantidad: ${cart[productId]}</p>
                <div>
                    <button id="btnSum" class="btn btn-secondary btnSumSub">+</button>
                    <button id="btnSubs" class="btn btn-danger btnSumSub">-</button>
                </div>
            </div>
        </div>
</div>`

}

const sum = (a, b) => a + b;

const calculateTotalCost = () => {
    const totalPrice = Object.keys(cart)
        .map((productId) => {
            const producto = getProduct(productId);
            return producto.price * cart[productId];
        })
        .reduce(sum, 0);
    return totalPrice;
}

//vaciar carrito por completo
const emptyCart = () => {
    cart = {};
    renderCartUI();
}

// Llamar cada vez que cambia el carrito
const renderCartUI = () => {
    modalBody.html('');
    const cartHTML = Object.keys(cart).map(createCartProductHTML).join('');
    modalBody.html(cartHTML);
    $('#totalToPay').html(`Total: $${calculateTotalCost()}`);
    addLocalStorage()
}

$(".btnBuyItem").click(function (e) {
    const button = $(this);
    const productId = parseInt(button.data('productid'));
    addProductToCart(productId);
    renderCartUI();
})
//click para vaciar carrito
$("#btnEmpty").click(function (e) {
    emptyCart();
    alert('El carrito se ha vaciado');
});

 
$("#btnSubs").click(function (e) {
    const button = $(this);
    const productId = parseInt(button.data('productid'));
    getProduct();
    removeProductFromCart(productId);
    renderCartUI();
})