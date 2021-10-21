const URLGET = `http://hp-api.herokuapp.com/api/characters`;
$("#cart").click(()=>
$.get(URLGET,function(respuesta,estado){
    console.log(respuesta[0])
    $("#cart").append(
        `<div><img src="${respuesta[0].image}"</img></div>`
    )
}))