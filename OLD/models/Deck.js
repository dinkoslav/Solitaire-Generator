var model = model || {};

(function (model){
    var Deck = function(size){
        this.size = size;
        this.cards = [];
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        this.suits = ["H","D","C","S"];
        this.prepareDeck();
    };

    Deck.prototype.createDeck = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.ranks.length; j++) {
                for (var k = 0; k < this.suits.length; k++) {
                    var card = model.getCard(this.ranks[j],this.suits[k], true);
                    this.cards.push(card);
                }
            }
        }
    };

    Deck.prototype.shuffle = function () {
        var cardsArray = this.cards;
        var cardsLength = cardsArray.length - 1;
        var toSwap;
        var temp;
        for (var i = cardsLength; i > 0; i--) {
            toSwap = Math.floor(Math.random() * i);
            temp = cardsArray[i];
            cardsArray[i] = cardsArray[toSwap];
            cardsArray[toSwap] = temp;
        }
    };

    Deck.prototype.prepareDeck = function (size) {
        this.createDeck();
        this.shuffle();
    };

    Deck.prototype.getCards = function () {
        return this.cards;
    };

    model.getDeck = function (size) {
        return new Deck(size);
    };

})(model);
