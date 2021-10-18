 let cardsDiv= document.getElementsByClassName("card");
// let addToCart= document.getElementById(`${data.id}`)
// let cart= [];

let products = JSON.stringify(data);

products= localStorage.setItem("Products", `${products}`);

let getProductsLocal= localStorage.getItem("Products");
let parseProducts= JSON.parse(getProductsLocal);
