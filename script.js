const boton = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
    menu.classList.toggle("activo");
});

// Cerrar el menu tocando fuera de él

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !boton.contains(e.target)
    ) {
        menu.classList.remove("activo");
        boton.textContent = "☰";
    }
});
