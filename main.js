const palos = ["♠", "♦", "♥", "♣"];
const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function generadorElementos(arr) { // Función que genera elementos de un array y los devuelve en un nuevo array
  const randomIndex = Math.floor(Math.random() * arr.length);// Genera un número aleatorio entre 0 y la longitud del array
  return arr[randomIndex];
}

function generadorCartas() { // Función que genera una carta aleatoria
    const palo = generadorElementos(palos);
    const valor = generadorElementos(valores);
    const paloHtml = document.getElementById("iconTop"); 
    const valorHtml = document.getElementById("num");

    paloHtml.innerHTML = `${palo}`; 
    valorHtml.innerHTML = `${valor}`;

    if (palo === "♦" || palo === "♥") {
        paloHtml.style.color = "red";
        valorHtml.style.color = "red";
    } 
    else {
        paloHtml.style.color = "black";
        valorHtml.style.color = "black";
    }

    console.log(palo,valor)
}


