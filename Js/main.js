createCards();

$("#cart").prepend(`<div id="cartWindow"></div>`);

// $("#cart").click(()=>{
//     let cartContentShow = localStorage.getItem("cart");
//     cartContentShow= JSON.parse (cartContentShow);
//    if(!cartContentShow) {
//         alert("El carrito esta vacio!")
// }else{}
// })
$("#cart").click(()=>{
    $("#cartWindow").css("background-color", "pink")
    .slideUp(1500)
    .slideDown(1500);
})
