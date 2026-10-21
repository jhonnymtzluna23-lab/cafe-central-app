const productos = [
    { nombre: "Café americano", precio: 35 },
    { nombre: "Capuchino", precio: 48 },
    { nombre: "Chocolate caliente", precio: 45 },
    { nombre: "Sándwich", precio: 65 },
    { nombre: "Pastel de chocolate", precio: 52 },
    { nombre: "Galleta", precio: 22 }
];

const pedido = [];
const menu = document.querySelector("#menu");
const listaPedido = document.querySelector("#lista-pedido");
const total = document.querySelector("#total");
const botonVaciar = document.querySelector("#vaciar");

function mostrarMenu() {
    productos.forEach(function (producto) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";
        tarjeta.innerHTML = "<h3>" + producto.nombre + "</h3><p>$" + producto.precio + "</p><button type='button'>Agregar</button>";
        tarjeta.querySelector("button").addEventListener("click", function () {
            pedido.push(producto);
            actualizarPedido();
        });
        menu.appendChild(tarjeta);
    });
}

function actualizarPedido() {
    listaPedido.innerHTML = "";
    pedido.forEach(function (producto) {
        const elemento = document.createElement("li");
        elemento.textContent = producto.nombre + " - $" + producto.precio;
        listaPedido.appendChild(elemento);
    });
    const suma = pedido.reduce(function (acumulado, producto) {
        return acumulado + producto.precio;
    }, 0);
    total.textContent = suma;
}

botonVaciar.addEventListener("click", function () {
    pedido.length = 0;
    actualizarPedido();
});

mostrarMenu();
