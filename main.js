// /*----- constants -----*/
//const masterDeck = buildMasterDeck();
// renderDeckInContainer(masterDeck, document.getElementById('player1-deck'));
const suits = ['s', 'h']
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
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
    'A': 14
};

const player1 = [];
const player2 = [];

/*----- app's state (variables) -----*/
let deck = []
values.forEach(v => {
    suits.forEach(s => {
        let card = {
            face: s + v,
            worth: cardWorth[v]
        }
        deck.push(card);
    })
});

let war; // if (player1.card === player2.card) {
//   return player1.draw * 3 && player2.draw *3  // how do you add face up and down cards
// if war, 3 cards face down && 1
// card face up
let roundWin; // highest card
let gameWin; // player with full deck


/*----- cached element references -----*/
// document.querySelector('#board-deck-p1')
// const player1 = document.querySelector('#player1-deck')
// let player2 = document.querySelector('#player2-deck');
// document.querySelector('#board-deck-p2')
// document.getElementById('player-1-location')
// document.getElementById('player-2-location')
// document.createElement('')
// document.createElement('')

/*----- event listeners -----*/
// document.querySelector('#start-game').addEventListener('click', renderShowCards);
// document.querySelector('#play').addEventListener('click', handleClickEvent);
// document.querySelector('#replay').addEventListener('click', init);

/*----- functions -----*/
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(deck);

function dealHands() {
    while (deck.length) {
        player1.push(deck.pop())
        player2.push(deck.pop())
    }
}

function showCards() {
    let c = player1.pop()
    let p1Card = document.getElementById('board-deck-p1')
    p1Card.className = `card ${c.face}`
    let c2 = player2.pop()
    let p2Card = document.getElementById('board-deck-p2') //.document.querySelector('#start-game').addEventListener('click', renderShowCards);
    p2Card.className = `card ${c2.face}`
};

dealHands();
showCards();
renderShuffleDeck();

function renderShuffleDeck() {
    const tempDeck = [...deck];
    shuffleDeck = [];
    while (tempDeck.length) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffleDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
}
//
// function renderShowCards(e) {
// This will determine when the start game button has been clicked
// and will display the first player card and second player card
//     basically what should happen to browser when clicked    
// };
//
//
// function renderDrawCards() {
// This will display the new cards for both player one and two, will be clicked every round
// };
//
//
// function init() {
//     // this will initialize the game
// };
//
//
// function war() {
//     if (player1 === player2) {
//         (player1.draw * 3 facedown && 1 faceup) && (player2.draw * 3 facedown && 1 faceup)
//         roundWinner = highest card
//     }
// };
//
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
//
// function gameWin() {
//     if (player1 === deck.length ||
//         player2 === deck.length)
//         return winner
// };
//
// function msgEl() {
//     // this will display a message on the screen based on who won that particular round of war
//     // this will display a message when the game is won (when one player has all the cards)
// };
//
// function render() {
//     // this will call the DOM and make changes to
//     //the browser as the game progresses and
//     //when game replay clicked
// }