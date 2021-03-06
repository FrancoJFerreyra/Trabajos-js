const data = [{
        id: 1,
        image: "../assets/Adidas_gazelle.jpg",
        productName: "Adidas Gazelle -UNISEX",
        marca: "ADIDAS",
        price: 4000
    },
    {
        id: 2,
        image: "../assets/AdidasZX700.jpg",
        productName: "Adidas Originals ZX 700 -MEN",
        marca: "ADIDAS",
        price: 4200
    },
    {
        id: 3,
        image: "../assets/adidaszx750.jpg",
        productName: "Adidas ZX 750 -MEN",
        marca: "ADIDAS",
        price: 3000
    },
    {
        id: 4,
        image: "../assets/AdidasSuperstar.jpg",
        productName: "Adidas SAMOA -UNISEX",
        marca: "ADIDAS",
        price: 6500
    },
    {
        id: 5,
        image: "../assets/AdidasRivalry.jpg",
        productName: "Adidas Originals Rivalry High -MEN",
        marca: "ADIDAS",
        price: 3250
    },
    {
        id: 6,
        image: "../assets/adidasY-3.jpg",
        productName: "Adidas Y-3 -UNISEX",
        marca: "ADIDAS",
        price: 4100
    },
    {
        id: 7,
        image: "../assets/fila_distruptor.jpg",
        productName: "Fila Disruptor -GIRL",
        marca: "FILA",
        price: 2500
    },
    {
        id: 8,
        image: "../assets/fila_distruptorxAtipici.jpg",
        productName: "Fila Disruptor II x Atipici -GIRL",
        marca: "FILA",
        price: 3000
    },
    {
        id: 9,
        image: "../assets/FilaFastCharge.jpg",
        productName: "Fila Fast Charge -GIRL",
        marca: "FILA",
        price: 3600
    },
    {
        id: 10,
        image: "../assets/FilaCheckerboardFaux.jpg",
        productName: "Fila Checkerboard Faux Black&White -GIRL",
        marca: "FILA",
        price: 2999
    },
    {
        id: 11,
        image: "../assets/FilaDIstruptor2premium.jpg",
        productName: "Fila Disruptor II Premium Pink -GIRL",
        marca: "FILA",
        price: 2000
    },
    {
        id: 12,
        image: "../assets/FilaMultiTrigate.jpg",
        productName: "Fila Multi Trigate Plus -GIRL",
        marca: "FILA",
        price: 4000
    },
    {
        id: 13,
        image: "../assets/ConverseChuckTaylor.jpg",
        productName: "Converse Chuck Taylor White -UNISEX",
        marca: "CONVERSE",
        price: 2800
    },
    {
        id: 14,
        image: "../assets/OffspringConverseChuck70.jpg",
        productName: "Offspring Converse Chuck 70 -UNISEX",
        marca: "CONVERSE",
        price: 2600
    },
    {
        id: 15,
        image: "../assets/ConverseCanvasWedgeHighTop.jpg",
        productName: "Converse Canvas Wedge -GIRL",
        marca: "CONVERSE",
        price: 3000
    },
    {
        id: 16,
        image: "../assets/ConverseAll-StarBlue.jpg",
        productName: "Converse All Star Blue -UNISEX",
        marca: "CONVERSE",
        price: 4000
    },
    {
        id: 17,
        image: "../assets/ConversStarPlayer.jpg",
        productName: "Converse Star Player Beige&Blue -UNISEX",
        marca: "CONVERSE",
        price: 5500
    },
    {
        id: 18,
        image: "../assets/ConverseStarPlayerBlue.jpg",
        productName: "Converse Star Player Blue -MEN",
        marca: "CONVERSE",
        price: 3600
    },
    {
        id: 19,
        image: "../assets/New_balance_574_grey.jpg",
        productName: "New Balance 574 Grey -GIRL",
        marca: "NEW BALANCE",
        price: 4850
    },
    {
        id: 20,
        image: "../assets/NewBalance997H.jpg",
        productName: "New Balance 997h -UNISEX",
        marca: "NEW BALANCE",
        price: 5000
    },
    {
        id: 21,
        image: "../assets/NewBalance574Aplinepack.jpg",
        productName: "New Balance 574 Alpine Pack -GIRL",
        marca: "NEW BALANCE",
        price: 6500
    },
    {
        id: 22,
        image: "../assets/NewBalance574Beige.jpg",
        productName: "New Balance 574 Beige -GIRL",
        marca: "NEW BALANCE",
        price: 4700
    },
    {
        id: 23,
        image: "../assets/NewBalanceFuelcell.jpg",
        productName: "New Balance FuelCell Propel RMX -GIRL",
        marca: "NEW BALANCE",
        price: 4500
    },
    {
        id: 24,
        image: "../assets/NewBalance530.jpg",
        productName: "New Balance 530 Pink -GIRL",
        marca: "NEW BALANCE",
        price: 5000
    },
    {
        id: 25,
        image: "../assets/AirJordan1.jpg",
        productName: "Air Jordan High 1 Panda -MEN",
        marca: "NIKE",
        price: 5500
    },
    {
        id: 26,
        image: "../assets/airJordanRetro.jpg",
        productName: "Air Jordan 1 Retro Tie dye -MEN",
        marca: "NIKE",
        price: 6000
    },
    {
        id: 27,
        image: "../assets/NikeAirForce1spiderman.jpg",
        productName: "Nike Air Force 1 spiderman -MEN",
        marca: "NIKE",
        price: 5900
    },
    {
        id: 28,
        image: "../assets/NikePinkwhite.jpg",
        productName: "Nike Air Jordan Mid Edge Glow -GIRL",
        marca: "NIKE",
        price: 4300
    },
    {
        id: 29,
        image: "../assets/NikeClassicCortez.jpg",
        productName: "Nike Classic Cortez -GIRL",
        marca: "NIKE",
        price: 6000
    },
    {
        id: 30,
        image: "../assets/NikeLeopard.jpg",
        productName: "Nike Air Force 1 Low Leopard -GIRL",
        marca: "NIKE",
        price: 6550
    },
    {
        id: 31,
        image: "../assets/ClassicPumasneakers.jpg",
        productName: "Classic Puma Pink -UNISEX",
        marca: "PUMA",
        price: 7000
    },
    {
        id: 32,
        image: "../assets/PumaCaliSport.jpg",
        productName: "Puma Cali Sport Coral -GIRL",
        marca: "PUMA",
        price: 3500
    },
    {
        id: 33,
        image: "../assets/PumaCaliStarMix.jpg",
        productName: "Puma Cali Sport Mix -UNISEX",
        marca: "PUMA",
        price: 4650
    },
    {
        id: 34,
        image: "../assets/PumaBasketPlatform.jpg",
        productName: "Puma Basket Platform Black -UNISEX",
        marca: "PUMA",
        price: 5460
    },
    {
        id: 35,
        image: "../assets/PumaCaliBold.jpg",
        productName: "Puma Ralph Sampson -GIRL",
        marca: "PUMA",
        price: 4700
    },
    {
        id: 36,
        image: "../assets/PumaRalphSampson.jpg",
        productName: "Puma Cali Bold -GIRL",
        marca: "PUMA",
        price: 5200
    }
];

const dataPorMarca = data.reduce((data, producto) => {
  data[producto.marca] = [
    ...(data[producto.marca] || []),
    producto
  ]
  return data;
}, {});
