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
let warArray = [];
let player1Card;
let player2Card;

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
        console.log(deck)
    }
    console.log(player1)
    console.log(player2)
    if (deck.length <= 2) {
        // gameWin()
    }
}

function showCards() {
    player1Card = player1[player1.length - 1]
    let p1Card = document.getElementById('board-deck-p1')
    p1Card.className = `card ${player1Card.face}`
    player2Card = player2[player2.length - 1]
    let p2Card = document.getElementById('board-deck-p2')
    p2Card.className = `card ${player2Card.face}`
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
    if (player1Card.worth > player2Card.worth) {
        console.log('player1 wins!')
            // return player1
        player1.unshift(player2Card)
        player2.pop()
        player1.unshift(player1.pop())
        while (warArray.length) {
            player1.unshift(warArray.pop())
        }
    } else if (player1Card.worth < player2Card.worth) {
        console.log('player 2 wins!')
        player2.unshift(player1Card)
        player1.pop()
        player2.unshift(player2.pop())
        while (warArray.length) {
            player2.unshift(warArray.pop())
        }
        // return player2
    } else {
        console.log('tie, run war function')
        for (let i = 0; i < 2; i++) {
            warArray.push(player2.pop())
            warArray.push(player1.pop())
        }
        setTimeout(() => {
            showCards()
            roundWin()
        }, 3000);
        //player2Card = 
        //     war();
    }
    if (player1.length === 0) {
        console.log('game over player 2 wins!')
    } else if (player2.length === 0) {
        console.log('game over player 1 wins!')
    }
    // need to figure out how to push cards to player who wins round
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

// function renderRoundWinner() {

// };

// function renderWinnerScore() {

// };

function render() {
    renderShuffleDeck();
    renderShowCards();
    // renderRoundWinner();
    // if (winner) {
    //     renderWinnerScore();
    // }
};