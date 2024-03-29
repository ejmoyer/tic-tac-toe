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
  if (counter % 2 != 0) {
    document.querySelector('p').replaceChild(document.createTextNode(`Player 2's Turn`), document.querySelector('p').firstChild);
    document.querySelector('p').style.color = "blue";
    document.querySelector('p').style.fontSize = "xx-large";
  } else {
    document.querySelector('p').replaceChild(document.createTextNode(`Player 1's Turn`), document.querySelector('p').firstChild);
    document.querySelector('p').style.color = "red";
    document.querySelector('p').style.fontSize = "xx-large";
  }
});

for (let div in divs) {
  divs[div].appendChild(document.createTextNode(""))
  const symbolFunc = event => {
    if (counter % 2 == 0) {
      divs[div].replaceChild(document.createTextNode(players[0]), divs[div].firstChild);
      grid[div] = players[0];
      divs[div].style.color = "red";
      divs[div].style.fontSize = "xx-large";
    } else {
      divs[div].replaceChild(document.createTextNode(players[1]), divs[div].firstChild);
      grid[div] = players[1];
      divs[div].style.color = "blue";
      divs[div].style.fontSize = "xx-large";
    }
    counter++;
    divs[div].removeEventListener("click", symbolFunc);
    if ((grid[0] + grid[1] + grid[2] == "XXX") ||
      (grid[3] + grid[4] + grid[5] == "XXX") ||
      (grid[6] + grid[7] + grid[8] == "XXX") ||
      (grid[2] + grid[4] + grid[6] == "XXX") ||
      (grid[0] + grid[4] + grid[8] == "XXX") ||
      (grid[0] + grid[3] + grid[6] == "XXX") ||
      (grid[1] + grid[4] + grid[7] == "XXX") ||
      (grid[2] + grid[5] + grid[8] == "XXX")) {
      document.querySelector("p").replaceChild(document.createTextNode(`Player 1 Wins`), document.querySelector('p').firstChild);

    } else if ((grid[0] + grid[1] + grid[2] == "OOO") ||
      (grid[3] + grid[4] + grid[5] == "OOO") ||
      (grid[6] + grid[7] + grid[8] == "OOO") ||
      (grid[2] + grid[4] + grid[6] == "OOO") ||
      (grid[0] + grid[4] + grid[8] == "OOO") ||
      (grid[0] + grid[3] + grid[6] == "OOO") ||
      (grid[1] + grid[4] + grid[7] == "OOO") ||
      (grid[2] + grid[5] + grid[8] == "OOO")) {
      document.querySelector("p").replaceChild(document.createTextNode(`Player 2 Wins`), document.querySelector('p').firstChild);
    }
  }

  divs[div].addEventListener("click", event => {
    if (counter % 2 != 0) {
      document.querySelector("p").replaceChild(document.createTextNode(`Player 1's Turn`), document.querySelector('p').firstChild);
      document.querySelector('p').style.color = "red";
      document.querySelector('p').style.fontSize = "xx-large";
    } else {
      document.querySelector("p").replaceChild(document.createTextNode(`Player 2's Turn`), document.querySelector('p').firstChild);
      document.querySelector('p').style.color = "blue";
      document.querySelector('p').style.fontSize = "xx-large";
    }
  })
  divs[div].addEventListener("click", symbolFunc);
}
document.querySelector("input").addEventListener("click", event => {
  document.location.reload(true)
})
