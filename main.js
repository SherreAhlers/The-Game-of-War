/*----- constants -----*/
const deck;
const suits = ["Spades", "Diamonds"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const player1 = null;
const player2 = null;


/*----- app's state (variables) -----*/
let war; // if player1 && player2 === value
// if war, 3 cards face down && 1
// card face up
let shuffleCard; // this will shuffle the deck of cards before it is dealt to the players
let roundWin; // highest card
let gameWin; // player with full deck
let dealDeck; // this will deal out 13 cards to each player at start of game.

/*----- cached element references -----*/
document.querySelector('#board-deck-p1')
document.querySelector('#player1-deck')
document.querySelector('#player2-deck')
document.querySelector('#board-deck-p2')
document.getElementById('player-1-location')
document.getElementById('player-2-location')
document.createElement('')
document.createElement('')

/*----- event listeners -----*/
document.querySelector('#draw-card').addEventListener('click', handleClickEvent);
document.querySelector('#replay').addEventListener('click', init);

/*----- functions -----*/
init();

function handleClickEvent(e) {
    // this will determine when a button is clicked and what should happen to browser when clicked
};

function init() {
    // this will initialize the game
};

function shuffleDeck() {
    // shuffle before game play
};

function dealDeck() {
    // this will deal 13 cards to each player
};

function war() {
    // if player1 && player2 === value
    // if war, 3 cards face down && 1 card face
    // up
};

function roundWin() {
    // = highest card
};

function gameWin() {
    // player === full deck
};

function msgEl() {
    // this will display a message on the screen based on who won that particular round of war
    // this will display a message when the game is won (when one player has all the cards)
};

function render() {
    // this will call the DOM and make changes to
    //the browser as the game progresses and
    //when game replay clicked
};

function replay() {
    // once game has been won, button will work
};