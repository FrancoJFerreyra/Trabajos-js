$("#cart").prepend(`<div id="cartWindow"></div>`);

$("#cart").click(()=>{
    $("#cartWindow").css("background-color", "pink")
    .slideUp(1500)
    .slideDown(1500);
})

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
                                <button id=${producto.id}>Agregar al carrito</button>
                            </div>
                        </div>
                    
                    `;
                    return productos;
                }, '')}
            </div>
        </section>
    `
});
