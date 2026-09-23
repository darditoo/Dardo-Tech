const imagenes = document.querySelectorAll(".hijo4 img");

let posicion = 0;

function mostrarImagen() {

    imagenes.forEach(function(imagen) {
        imagen.style.display = "none";
    });

    imagenes[posicion].style.display = "block";
}

function siguienteImagen() {

    posicion++;

    if (posicion >= imagenes.length) {
        posicion = 0;
    }

    mostrarImagen();
}

mostrarImagen();

setInterval(siguienteImagen, 3000);