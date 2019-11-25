let grid = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let turn = [0, 1];
let players = ['X', 'O'];

// as a player i want to see a grid so i can know the state of the game
// make the grid and the divs reference one another
let divs = Array.from(document.querySelectorAll("div"))
for (let div in divs) {
  divs[div].appendChild(document.createTextNode(""))
  divs[div].addEventListener("click", event => {
    // put an x or O with .replaceChild
    divs[div].replaceChild(document.createTextNode(players[0]), divs[div].firstChild)
    // remove the event listener so you cant click that one again
  })
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
