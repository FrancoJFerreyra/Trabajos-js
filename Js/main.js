 class producto{
     constructor(nombre,precio){
     this.nombre=nombre.toUppercase ;
     this.precio=parseFloat(precio) ;
 }
 
 descuento(){
     this.precio = this.precio * 0.10;
 }
 }
 const arroz = new producto ("Arroz", "55");
 const pollo = new producto ("pollo","400");
 const salsa = new producto ("salsa","120");

 arroz.descuento();
 pollo.descuento();
 salsa.descuento();
