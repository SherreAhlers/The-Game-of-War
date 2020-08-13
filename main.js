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


/*----- app's state (variables) -----*/
let player1 = [];
let player2 = [];
let deck = []
let warArray = [];
let player1Card;
let player2Card;
let winner;

/*----- cached element references -----*/
const p1Card = document.getElementById('board-deck-p1')
const p2Card = document.querySelector('#board-deck-p2')
const msgEl = document.querySelector('#msg');
const replayEl = document.getElementById('replay');

/*----- event listeners -----*/
document.querySelector('#play').addEventListener('click', renderShowCards);
replayEl.addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    p1Card.className = 'card';
    p2Card.className = 'card';
    player1 = [];
    player2 = [];
    deck = []
    warArray = [];
    player1Card = undefined;
    player2Card = undefined;
    winner = undefined;

    values.forEach(v => {
        suits.forEach(s => {
            let card = {
                face: s + v,
                worth: cardWorth[v]
            }
            deck.push(card);
        })
    });
    shuffle(deck);
    console.log(player1)
    console.log(player2)
    console.log(deck)
        // renderShuffleDeck();
}

// function init() {
//     deck = [];
//     values.forEach(v => {
//         suits.forEach(s => {
//             let card = {
//                 face: s + v,
//                 worth: cardWorth[v]
//             }
//             deck.push(card);
//         })
//     });
//     player2 = [];
//     player1 = [];
//     warArray = [];
//     player1Card = null;
//     player2Card = null;
//     winner = null;
//     shuffleDeck(deck);
//     renderShuffleDeck();
//     render()
// }


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};
// shuffle(deck);

function dealHands() {
    while (deck.length) {
        player1.push(deck.pop())
        player2.push(deck.pop())
    }
};

function showCards() {
    player1Card = player1[player1.length - 1]
    const p1Card = document.getElementById('board-deck-p1')
    p1Card.className = `card ${player1Card.face}`
    player2Card = player2[player2.length - 1]
    const p2Card = document.getElementById('board-deck-p2')
    p2Card.className = `card ${player2Card.face}`
};

// renderShuffleDeck();

// function renderShuffleDeck() {
//     const tempDeck = [...deck];
//     shuffleDeck = [];
//     while (tempDeck.length) {
//         const rndIdx = Math.floor(Math.random() * tempDeck.length);
//         shuffleDeck.push(tempDeck.splice(rndIdx, 1)[0]);
//     }
// };

function renderShowCards(evt) {
    msgEl.innerHTML = "";
    const btn = evt.target
    if (btn === document.querySelector('#play')) {
        if (checkGameWin() === false) {
            dealHands()
            showCards()
            roundWin()
        } else {
            renderMessage(checkGameWin())
        }
    };
};

function roundWin() {
    if (player1Card.worth > player2Card.worth) {
        player1.unshift(player2Card)
        player2.pop()
        player1.unshift(player1.pop())
        while (warArray.length) {
            player1.unshift(warArray.pop())
        }
    } else if (player1Card.worth < player2Card.worth) {
        player2.unshift(player1Card)
        player1.pop()
        player2.unshift(player2.pop())
        while (warArray.length) {
            player2.unshift(warArray.pop())
        }
    } else {
        for (let i = 0; i < 2; i++) {
            warArray.push(player2.pop())
            warArray.push(player1.pop())
        }
        renderWar()
        setTimeout(() => {
            showCards()
            roundWin()
            war()
        }, 2000);
    }
};

function war() {
    dealHands()
    dealHands()
    dealHands()
    dealHands()
    roundWin()

};

function checkGameWin() {
    if (player1.length === deck.length) {
        winner = 'Player1'
        return winner;
    } else if (player2.length === deck.length) {
        winner = 'Player2'
        return winner;
    } else {
        return false;
    }
};

function renderMessage(winner) {
    msgEl.innerHTML = `Congratulations ${winner}, you have won!`;
};

function renderWar() {
    msgEl.innerHTML = "WAR!"
        // setTimeout(() => {
        //     msgEl.innerHTML = ""
        // }, 2000);
};

function render() {
    replayEl.style.visibility = checkGameWin() ? 'visible' : 'hidden'
}