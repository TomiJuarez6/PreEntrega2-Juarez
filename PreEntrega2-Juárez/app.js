class Producto{

    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.stock = false;
    }

    sumarIva(){
        this.precio = this.precio * 1.22;
    }
    vender(){
        this.stock = true;
    }
    precioSugerido(){
        return this.precio * 1.22 * 1.25;
    }
}

let arrayProductos = [];

let comprobacion = false;
do{
    let comprobacion = prompt("Ingrese el nombre del producto que desee agregar.");
    if (comprobacion === "fin"){
    break;
}else{
    nombreProducto = comprobacion;
    let precioProducto = prompt("Ingrese el precio del producto");
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad comprada de dicho producto"));
    arrayProductos.push(new Producto(nombreProducto, precioProducto, cantidadProducto));
    }
}
while(comprobacion != 'fin')
console.log(arrayProductos)


for(let producto of arrayProductos){
    document.write("<ul><li><h4>Nombre: " + producto.nombre + "</li></h4>");
    document.write("<ul><li><h4>Precio: " + producto.precio + "</li></h4>");
    document.write("<li><h4>Cantidad: " + producto.cantidad + "</li></h4>");
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());
    console.log(producto.precioSugerido());
}

/* let noStock = arrayProductos.map(producto => producto.cantidad === 0 || producto.stock === false);
console.log(noStock);
document.write("<h3>Producto sin stock</h3>");

for(let producto of noStock){
    document.write("<ul><li><h4>Nombre: " + producto.nombre + "</li></h4>");
    document.write("<li><h4>Precio: " + producto.precio + "</li></h4>");
    document.write("<li><h4>Cantidad: " + producto.cantidad + "</li></h4>");
}   */