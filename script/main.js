const popup = document.getElementById("popup");
const abrirPopup = document.getElementById("abrirPopup");
const cerrarPopup = document.getElementById("cerrarPopup");

// Mostrar el pop-up al hacer clic en el botón
abrirPopup.addEventListener("click", () => {
    popup.style.display = "flex"; // Cambia el display para mostrar el pop-up
});

// Ocultar el pop-up al hacer clic en la 'x'
cerrarPopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Cerrar el pop-up al hacer clic fuera del contenido
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});