let contenedor = document.getElementById("recipiente"); //captura de elemnto
let btnAccion = document.getElementById("btn"); // captura de boton
btnAccion.addEventListener("click", () => {
  if (!contenedor.querySelector("h2")) {
    // Solo si no existe un h2
    let newElement = document.createElement("div");
    newElement.innerHTML = "<h2>Hola Mundo</h2>";
    contenedor.appendChild(newElement);
  }
});
