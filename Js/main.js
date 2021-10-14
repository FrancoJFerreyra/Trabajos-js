$("#cart").prepend(`<div id="cartWindow"></div>`);

$("#cart").click(()=>{
    $("#cartWindow").show()
})

$("#cartWindow").css("background-color", "pink")