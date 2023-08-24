/**@param {string} palos; array de palos
 * @param {string and number} valores; array de valores
 * @function generadorElementos toma como argumento un array y devuelve en un nuevo array de elementos aleatorios
 * @function generadorCartas genera una combinacion aleatoria y la muestra en el html- Esta el la función principal la cual se asocia al evento click del botón
 * @constant paloTopHtml es el elemento del html donde se muestrara el palo de la carta
 * @const copyPalo es una copia del palo de la carta que se muestrara en la parte inferior derecha de la carta
 * @operadores ternarios; se utilizan para cambiar el color de los palos de negro a rojo y viceversa, reemplazando el if y else.
 */

const palos = ["♠", "♦", "♥", "♣"];
const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function generadorElementos(arr) { 
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generadorCartas() {
    const palo = generadorElementos(palos);
    const valor = generadorElementos(valores);

    const paloTopHtml = document.getElementById("iconTop"); 
    const valorHtml = document.getElementById("valor");
    
    paloTopHtml.innerHTML = `${palo}`; 
    valorHtml.innerHTML = `${valor}`;
    
    const copyPalo = paloTopHtml.textContent;
    iconBot.textContent = copyPalo;

    paloTopHtml.style.color = (palo === "♦" || palo === "♥") ? "red" : "black";
    valorHtml.style.color = (palo === "♦" || palo === "♥") ? "red" : "black";
    iconBot.style.color = (palo === "♦" || palo === "♥") ? "red" : "black";

    console.log(palo,valor,palo)
}


