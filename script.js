let grid = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let turn = [0, 1];
const players = ['X', 'O'];

let divs = Array.from(document.querySelectorAll("div"))
function randomPlayer(playerNumber) {
  let randomNumber = Math.random();
  if (randomNumber >= .5) {
  return Math.ceil(randomNumber * Math.floor(playerNumber));
} else {
  return Math.floor(randomNumber * Math.floor(playerNumber));
}
}

let counter = randomPlayer(1);
window.addEventListener("load", event => {
  if (counter % 2 != 0){
  document.querySelector('p').replaceChild(document.createTextNode(`Player 2's Turn`), document.querySelector('p').firstChild)
} else {
    document.querySelector('p').replaceChild(document.createTextNode(`Player 1's Turn`), document.querySelector('p').firstChild)
}
});

for (let div in divs) {
  divs[div].appendChild(document.createTextNode(""))
  const symbolFunc = event => {
    if (counter % 2 == 0) {
      divs[div].replaceChild(document.createTextNode(players[0]), divs[div].firstChild);
    } else {
      divs[div].replaceChild(document.createTextNode(players[1]), divs[div].firstChild);
    }
    counter++;
    divs[div].removeEventListener("click", symbolFunc);
  }

  divs[div].addEventListener("click", event => {
    if (counter % 2 != 0) {
      document.querySelector("p").replaceChild(document.createTextNode(`Player 1's Turn`), document.querySelector('p').firstChild)
  } else {
      document.querySelector("p").replaceChild(document.createTextNode(`Player 2's Turn`), document.querySelector('p').firstChild)
  }
  })
  divs[div].addEventListener("click", symbolFunc);
}
document.querySelector("input").addEventListener("click", event => {
document.location.reload(true)
})
