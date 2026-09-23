document.addEventListener("DOMContentLoaded", () => {

    const textoCompleto = "Dardo Tech";
    const elementoTexto = document.getElementById("texto-escrito");

    if (elementoTexto) {
        elementoTexto.textContent = textoCompleto;
    }

    const btnTheme = document.getElementById("btn-theme");

    if (btnTheme) {
        btnTheme.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                btnTheme.textContent = "☀️ Modo Claro";
            } else {
                btnTheme.textContent = "🌙 Modo Oscuro";
            }
        });
    }

});