const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];
   
//Mostrar el carrito de la compra/ listar todos los productos:
console.log("EJERCICIO 1)");

for (product in carrito) {
    console.log("----- Producto " + product  + " -----");
    for (item in carrito[product]) {
    console.log("- " + item + ": " + carrito[product][item]);
    }
   }

// Eliminar el producto con id: 54657 del carrito de la compra:
console.log("EJERCICIO 2)");

var carrito2 = carrito.slice()

for (product of carrito) {
    if(product.id == 54657) {
    var index = carrito.indexOf(product);
    carrito2.splice(index,1);  
    console.log("Este es el nuevo array sin el producto:")
    console.log(carrito2);
    }
   }
   
// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
console.log("EJERCICIO 3)");

var totalCarrito;
totalCarrito = 0;
var calcularTotal = () => {
    for (i=0 ; i<carrito.length; i++) {        
        totalCarrito += carrito[i].price * carrito[i].count;        
        };
    return totalCarrito;
}
var total = calcularTotal();
console.log("El total del carrito es: " + total);

// Filtrar por los productos que sean prime
console.log("EJERCICIO 4)")

for (product of carrito) {
    if(product.premium) {
        console.log("Este producto es prime: " + product.name);
    } else {
        console.log("Este producto no es prime: " + product.name);
    }
};

// PARTE OPCIONAL EJERCICIO -------------------------------------
// Si todos los productos son prime => "Perdido sin gastos de envío"

console.log("EJERCICIO 5)");

var totalPrime = 0;
var cuantosPrime = () => {
    for (product of carrito) {
        if (product.premium) {
            totalPrime = totalPrime + 1;
        } 
    }
    return totalPrime;
}

if (cuantosPrime() == carrito.length) {
    console.log("Carrito sin gastos de envío");
} else 
console.log("Carrito con gastos de envío");

// Aplicar 5% descuento si la compra es mayor que 100€

console.log("EJERCICIO 7)");

if(total > 100) {
    console.log("Tienes descuento del 5%, el total es de: " + total * 0.95);
}

// Mostrar carrito con html
for(i=0;i<carrito.length;i++) {
    var list = document.createElement("ul");
    list.setAttribute("id", "list");
    var div = document.getElementById("div");
    div.appendChild(list);
    
    for (product in carrito[i]) {
        var elementList = document.createElement("li");
        var key = carrito[i].id;
        elementList.setAttribute("id", key);
        elementList.innerText = product + ": " + carrito[i][product];
        list.appendChild(elementList);

    }
      
}



