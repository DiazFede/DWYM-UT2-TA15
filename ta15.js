const lista = document.getElementById("lista");
const textoInput = document.getElementById("texto");
const btnAñadir = document.getElementById("btnAñadir");
const btnEliminar = document.getElementById("btnEliminar");

btnAñadir.addEventListener("click", function() {
    const texto = textoInput.value.trim();

    if (texto !== "") {
        const nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = texto;

        lista.appendChild(nuevoElemento);

        textoInput.value = "";
        }
});

btnEliminar.addEventListener("click", function() {
    const ultimoElemento = lista.lastElementChild;

    if (ultimoElemento) {
        lista.removeChild(ultimoElemento);
    }
});
