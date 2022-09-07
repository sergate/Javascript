const productos = [
    {nombre: "Torta Cumpleaños", precio: 1500},
    {nombre: "Desayuno", precio: 1200},
    {nombre: "Pastrafrola", precio: 850},
    {nombre: "Lemon Pie", precio: 1100},
    {nombre: "Mesa Tematica", precio: 3500},
];
let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto? Ingresar Si o No")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, Ingresar Si o No")
    seleccion = prompt("Hola, desea comprar algun producto? Ingresar Si o No")
}

if(seleccion === "si"){
    alert("Lista de Productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert(todoslosProductos.join(" - "))
} else if (seleccion === "no"){
    alert("Gracias por Visitarnos. Vuelva Pronto!!!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto === "Torta Cumpleaños" || producto === "Desayuno" || producto === "Pastafrola" || producto === "Lemon Pie" || producto === "Mesa Tematica"){
        switch(producto) {
            case "Torta Cumpleaños":
                precio = 1500;
                break;
            case "Desayuno":
                precio = 1200;
                break;
            case "Pastafrola":
                precio = 850;
                break;
            case "Lemon Pie":
                precio = 1100;
                break;
            case "Mesa Tematica":
                precio = 3500;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuentas unidades desea comprar?"))

    carrito.push({producto, unidades, precio})
    } else{
        alert("Producto No Disponible")
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por su compra. Hasta Pronto")
        carrito.forEach((carritoFinal) => {
            
        })
    }

}
