// /*----- constants -----*/
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

// let war; // if (player1.card === player2.card) {
//   return player1.draw * 3 && player2.draw *3  // how do you add face up and down cards
// if war, 3 cards face down && 1
// card face up
// let roundWin; // highest card
// let gameWin; // player with full deck


/*----- cached element references -----*/
document.querySelector('#board-deck-p1')
document.querySelector('#board-deck-p2')
    // document.getElementById('player-1-location')
    // document.getElementById('player-2-location')
    // document.createElement('')
    // document.createElement('')

/*----- event listeners -----*/
document.querySelector('#play').addEventListener('click', renderShowCards);
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
    if (deck.length <= 2) {
        gameWin()
    }
}

function showCards() {
    let c = player1.pop()
    let p1Card = document.getElementById('board-deck-p1')
    p1Card.className = `card ${c.face}`
    let c2 = player2.pop()
    let p2Card = document.getElementById('board-deck-p2')
    p2Card.className = `card ${c2.face}`
};

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
function renderShowCards(evt) {
    const btn = evt.target
        // when this is clicked run these two functions
    if (btn === document.querySelector('#play')) {
        dealHands()
        showCards()
        roundWin()
    };
};

function roundWin() {
    if (player1[player1.length - 1] > player2[player2.length - 1]) {
        console.log('player1 wins!')
        return player1
    } else if (player1[player1.length - 1] < player2[player2.length - 1]) {
        console.log('player 2 wins!')
        return player2
    } else {
        console.log('tie, run war function')
        war();
    }
    // = highest card
};


function war() {
    dealHands()
    dealHands()
    dealHands()
    dealHands()
    roundWin()

};

function gameWin() {
    let winner;
    if (player1.length === deck.length) {
        winner = player1
    } else if (player2.length === deck.length) {
        winner = player2
    }
    return winner; // use this to render winner of game
};


// function renderWinnerScore() {

// };

// function render() {
//     renderShuffleDeck();
//     renderShowCards();
//     if (winner) {
//         renderWinnerMessage();
//     }
// };