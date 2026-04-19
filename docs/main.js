// ==========================
// MENU HAMBURGUESA
// ==========================
const btn = document.querySelector(".menu-icon");
const menu = document.querySelector(".nav");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });
}

// ==========================
// BOTON VOLVER ARRIBA
// ==========================
const btnTop = document.getElementById("btnTop");

if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================
// MENSAJE DE BIENVENIDA
// ==========================
window.addEventListener("load", () => {
  alert("BINEVENIDO A MAXILIBROS");
});

// ==========================
// cambar a modo oscuro
// ==========================


const btnModo = document.getElementById("modo");

btnModo.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

window.onload = function() {

  let libros = document.querySelectorAll(".varios img");
  let contador = document.getElementById("contador");

  let total = libros.length;
  let i = 0;

  let intervalo = setInterval(() => {
    contador.textContent = "Total de libros: " + i;
    i++;
    if (i > total) clearInterval(intervalo);
  }, 50);

}

function cambiarVista(tipo) {
  const contenedor = document.getElementById("contenedor-libros");

  contenedor.className = "";
  contenedor.classList.add(tipo);
}

function mostrarLibro(elemento) {
  const img = document.getElementById("preview-img");
  const titulo = document.getElementById("preview-title");
  const desc = document.getElementById("preview-desc");

  img.src = elemento.src;
  titulo.textContent = elemento.dataset.titulo;
  desc.textContent = elemento.dataset.desc;
}