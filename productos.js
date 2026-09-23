/* =========================================================
   CARRITO DE COMPRAS
========================================================= */

const carrito = document.getElementById("carrito");
const fondoCarrito = document.getElementById("fondoCarrito");

const btnCarrito = document.getElementById("btnCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

const carritoProductos = document.getElementById("carritoProductos");
const carritoVacio = document.getElementById("carritoVacio");

const contadorCarrito = document.getElementById("contadorCarrito");
const cantidadTotal = document.getElementById("cantidadTotal");
const totalCarrito = document.getElementById("totalCarrito");

const btnVaciar = document.getElementById("btnVaciar");
const btnComprar = document.getElementById("btnComprar");

const notificacion = document.getElementById("notificacion");

const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".producto");
const filtros = document.querySelectorAll(".filtro");
const sinResultados = document.getElementById("sinResultados");


/* =========================================================
   VARIABLES
========================================================= */

let carritoItems = JSON.parse(
    localStorage.getItem("carrito")
) || [];

let filtroActual = "todos";


/* =========================================================
   FORMATO DE MONEDA
========================================================= */

function formatoPrecio(precio) {

    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN"
    }).format(precio);

}


/* =========================================================
   GUARDAR CARRITO
========================================================= */

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carritoItems)
    );

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    carrito.classList.add("activo");
    fondoCarrito.classList.add("activo");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function cerrarCarritoFuncion() {

    carrito.classList.remove("activo");
    fondoCarrito.classList.remove("activo");

    document.body.style.overflow = "";

}


/* =========================================================
   AGREGAR PRODUCTO
========================================================= */

function agregarProducto(producto) {
    const id = producto.dataset.id;

    const productoExistente = carritoItems.find(
        item => item.id === id
    );


}
