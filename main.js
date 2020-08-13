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

let warArray = [];
let player1Card;
let player2Card;
let winner;
// let scores;

/*----- cached element references -----*/
const p1Card = document.getElementById('board-deck-p1')
const p2Card = document.querySelector('#board-deck-p2')
const msgEl = document.querySelector('#msg');
const replayEl = document.getElementById('replay');

/*----- event listeners -----*/
document.querySelector('#play').addEventListener('click', renderShowCards);
// replayEl.addEventListener('click', init);

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
        gameWin()
    }
}

function showCards() {
    player1Card = player1[player1.length - 1]
    const p1Card = document.getElementById('board-deck-p1')
    p1Card.className = `card ${player1Card.face}`
    player2Card = player2[player2.length - 1]
    const p2Card = document.getElementById('board-deck-p2')
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
        roundWin() // if so need message/ or keep round score - which player won round
    };
};

function roundWin() {
    if (player1Card.worth > player2Card.worth) {
        console.log('player1 wins!')
            // return player1 // need to find a way to put message into DOM
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
        // return player2 // need to find a way to put message into DOM
    } else {
        console.log('tie, run war function')
        for (let i = 0; i < 2; i++) {
            warArray.push(player2.pop())
            warArray.push(player1.pop())
        }
        setTimeout(() => {
            showCards()
            roundWin()
            war()
        }, 2000);
        // }
        // if (player1.length === 0) {
        //     // gameWin()
        //     // console.log('game over player 1 wins!') // find way to make this a DOM message
        // } else if (player2.length === 0) {
        //     // gameWin()
        // }
    };

    function war() {
        dealHands()
        dealHands()
        dealHands()
        dealHands()
        roundWin()

    };

    // function gameWin() {
    //     return player1.length === 0 || player2.length === 0
    // }


    function gameWin() {
        if (player1.length === deck.length) {
            winner = player1
        } else if (player2.length === deck.length) {
            winner = player2
        }
        return winner;
    };

    function render() {
        renderShuffleDeck();
        renderShowCards();
        // renderRoundWinner();
        // replayEl.style.visibility = gameWin() ? 'visible' : 'hidden';
        // player1 = deck.length
        // if (player1.length === deck.length) {
        //     winner = player1
        // } else if (player2.length === deck.length) {
        //     winner = player2
        // }

        renderMessage();
    };

    function renderMessage() {
        if (player1.length === deck.length) {
            msgEl.innerHTML = "Congratulations Player 1, you have won!";
        } else if (player2.length === deck.length) {
            msgEl.innerHTML = "Congratulations Player 2, you have won!";
        }
    };