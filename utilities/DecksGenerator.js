var utilities = utilities || {};

// DecksGenerator class is responsible for generating random decks
(function (utilities){
    var deckSize;
    var cards = [];
    var ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    var suits = ["H","D","C","S"];

    // Generate specific count of decks with all cards
    function createDeck(){
        for (var i = 0; i < deckSize; i++) {
            for (var j = 0; j < ranks.length; j++) {
                for (var k = 0; k < suits.length; k++) {
                    var card = model.getCard(ranks[j],suits[k], true);
                    cards.push(card);
                }
            }
        }
    }

    // Randomize
    function shuffle() {
        var cardsArray = cards;
        var cardsLength = cardsArray.length - 1;
        var toSwap;
        var temp;
        for (var i = cardsLength; i > 0; i--) {
            toSwap = Math.floor(Math.random() * i);
            temp = cardsArray[i];
            cardsArray[i] = cardsArray[toSwap];
            cardsArray[toSwap] = temp;
        }
    }

    utilities.getDecks = function (size) {
        deckSize = size;
        createDeck();
        shuffle();
        return cards;
    };

})(utilities);
