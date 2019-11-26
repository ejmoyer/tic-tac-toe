
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


//make sure the grid works

// as a player i want to click a square to place a marker


// add an event listener for click
// it adds a text node to the div
// as a player i want to see who's turn it is to properly take turns

// as a player i would like to have a button to reset the game
// when someone wins

// as a player i want to see a result so i can know the outcome

// as a player i want new games to be randomized who starts
// so that its fair
