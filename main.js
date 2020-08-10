/*----- constants -----*/
const deck = {
    spades: {
        2: 'card-deck-imgs/spades/spades-2.svg',
        3: 'card-deck-imgs/spades/spades-3.svg',
        4: 'card-deck-imgs/spades/spades-4.svg',
        5: 'card-deck-imgs/spades/spades-5.svg',
        6: 'card-deck-imgs/spades/spades-6.svg',
        7: 'card-deck-imgs/spades/spades-7.svg',
        8: 'card-deck-imgs/spades/spades-8.svg',
        9: 'card-deck-imgs/spades/spades-9.svg',
        10: 'card-deck-imgs/spades/spades-10.svg',
        11: 'card-deck-imgs/spades/spades-J.svg',
        12: 'card-deck-imgs/spades/spades-Q.svg',
        13: 'card-deck-imgs/spades/spades-K.svg',
        1: 'card-deck-imgs/spades/spades-A.svg',
        cardBackImgUrl: 'card-deck-imgs/redCardBack.svg'
    },
    hearts: {
        2: 'card-deck-imgs/hearts/hearts-2.svg',
        3: 'card-deck-imgs/hearts/hearts-3.svg',
        4: 'card-deck-imgs/hearts/hearts-4.svg',
        5: 'card-deck-imgs/hearts/hearts-5.svg',
        6: 'card-deck-imgs/hearts/hearts-6.svg',
        7: 'card-deck-imgs/hearts/hearts-7.svg',
        8: 'card-deck-imgs/hearts/hearts-8.svg',
        9: 'card-deck-imgs/hearts/hearts-9.svg',
        10: 'card-deck-imgs/hearts/hearts-10.svg',
        11: 'card-deck-imgs/hearts/hearts-J.svg',
        12: 'card-deck-imgs/hearts/hearts-Q.svg',
        13: 'card-deck-imgs/hearts/hearts-K.svg',
        1: 'card-deck-imgs/hearts/hearts-A.svg',
        cardBackImgUrl: 'card-deck-imgs/redCardBack.svg'

    }
};

const suits = ['spades', 'hearts']
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const cardWorth = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 1
};

const player1 = [];
const player2 = [];

/*----- app's state (variables) -----*/
let createDeck = []
values.forEach(v => {
    suits.forEach(s => {
        let card = {
            face: s + v,
            worth: cardWorth[v]
        }
        createDeck.push(card);
    })
    card();
});
let card = document.createElement(`<div class="card" ${card.value}</div>`)
player1DivEL.appendChild(card);
console.log(card);

let newCard = `<img src = '${deck.spades[2]}'></img>`
    // document.querySelector('#player1-deck').innerHTML = 'img src';
console.log(newCard);


let war; // if (player1.card === player2.card) {
//   return player1.draw * 3 && player2.draw *3  // how do you add face up and down cards
// if war, 3 cards face down && 1
// card face up
let shuffleCard; // this will shuffle the deck of cards before it is dealt to the players
let roundWin; // highest card
let gameWin; // player with full deck
//let dealDeck = document.querySelector('#draw-card'); // this will deal out 13 cards to each player at start of game.

/*----- cached element references -----*/
document.querySelector('#board-deck-p1')
    // const player1 = document.querySelector('#player1-deck')
    // let player2 = document.querySelector('#player2-deck');
document.querySelector('#board-deck-p2')
document.getElementById('player-1-location')
document.getElementById('player-2-location')
    // document.createElement('')
    // document.createElement('')

/*----- event listeners -----*/
// document.querySelector('#draw-card').addEventListener('click', handleClickEvent);
// document.querySelector('#replay').addEventListener('click', init);

/*----- functions -----*/
// init();

// function handleClickEvent(e) {
//     // this will determine when a button is clicked and what should happen to browser when clicked
// };

// function init() {
//     // this will initialize the game
// };

// function shuffleDeck() {
//     // shuffle before game play
// };

// function createDeck() {


// }


function dealDeck() {
    //document.createElement   
    const player1 = document.querySelector('#player1-deck') //.appendChild('imgUrl, facedown');
        // const player2 = Math.floor(Math.random() * deck.length) = document.querySelector('#player2-deck') //.appendChild('imgUrl, facedown');
    console.log(player1);
}
dealDeck();
//render();

// function war() {
//     if (player1 === player2) {
//         (player1.draw * 3 facedown && 1 faceup) && (player2.draw * 3 facedown && 1 faceup)
//         roundWinner = highest card
//         war, 3 cards face down && 1 card face up
//     }
// };

// function roundWin() {
//     if (player1.card > player2.card) {
//         winner = 'player1';
//     } else if (player1.card < player2.card) {
//         winner = "player2";
//     } else {
//         war();
//     }
//     // = highest card
// };

// function gameWin() {
//     // if (player1 === deck.length) || if (player2 === deck.length)
//     return winner
// };

// function msgEl() {
//     // this will display a message on the screen based on who won that particular round of war
//     // this will display a message when the game is won (when one player has all the cards)
// };

// function render() {
//     // this will call the DOM and make changes to
//     //the browser as the game progresses and
//     //when game replay clicked
// };

// function replay() {
//     // once game has been won, button will work
// };








// /*----- constants -----*/
// const suits = ['s', 'd'];
// const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// // Build a 'master' deck of 'card' objects used to create shuffled decks
// const masterDeck = buildMasterDeck();
// renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

// /*----- app's state (variables) -----*/
// let shuffledDeck;

// /*----- cached element references -----*/
// const shuffledContainer = document.getElementById('shuffled-deck-container');

// /*----- event listeners -----*/
// document.querySelector('button').addEventListener('click', renderShuffledDeck);

// /*----- functions -----*/
// function renderShuffledDeck() {
//     // Create a copy of the masterDeck (leave masterDeck untouched!)
//     const tempDeck = [...masterDeck];
//     shuffledDeck = [];
//     while (tempDeck.length) {
//         // Get a random index for a card still in the tempDeck
//         const rndIdx = Math.floor(Math.random() * tempDeck.length);
//         // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
//         shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
//     }
//     renderDeckInContainer(shuffledDeck, shuffledContainer);
// }

// function renderDeckInContainer(deck, container) {
//     container.innerHTML = '';
//     // Let's build the cards as a string of HTML
//     // Use reduce when you want to 'reduce' the array into a single thing - in this case a string of HTML markup 
//     const cardsHtml = deck.reduce(function(html, card) {
//         return html + `<div class="card ${card.face}"></div>`;
//     }, '');
//     container.innerHTML = cardsHtml;
// }

// function buildMasterDeck() {
//     const deck = [];
//     // Use nested forEach to generate card objects
//     suits.forEach(function(suit) {
//         ranks.forEach(function(rank) {
//             deck.push({
//                 // The 'face' property maps to the library's CSS classes for cards
//                 face: `${suit}${rank}`,
//                 // Setting the 'value' property for game of blackjack, not war
//                 value: Number(rank) || (rank === 'A' ? 11 : 10)
//             });
//         });
//     });
//     return deck;
// }

// renderShuffledDeck();