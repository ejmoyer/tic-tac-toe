
let grid = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let turn = [0, 1];
const players = ['X', 'O'];

let divs = Array.from(document.querySelectorAll("div"))
let counter = 0;
for (let div in divs) {
  divs[div].appendChild(document.createTextNode(""))
  const symbolFunc = event => {
    counter++;
    if (counter % 2 == 0) {
        divs[div].replaceChild(document.createTextNode(players[0]), divs[div].firstChild);
}
    else {
        divs[div].replaceChild(document.createTextNode(players[1]), divs[div].firstChild);
        }
        divs[div].removeEventListener("click", symbolFunc);
}
  divs[div].addEventListener("click", symbolFunc);
}
