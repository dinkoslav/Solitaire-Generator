var model = model || {};

(function (model){
    var Pile = function(cascading, vertical, type, startingCardsCount){
        this.cards = [];
        this.cascading = cascading;
        this.vertical = vertical;
        this.type = type;
        this.attr = model.getAttribute();
        this.startingCardsCount = startingCardsCount;
        this.onEmptyPileImage = "none";
        this.isTemp = false;
    };

    Pile.prototype.getPosition = function() {
        return this.attr.getPosition();
    };

    Pile.prototype.setPosition = function(x, y) {
        return this.attr.setPosition(x, y);
    };

    Pile.prototype.getDimension = function(){
        return this.attr.getDimension();
    };

    Pile.prototype.updateAttribute = function(cardSize){
        this.attr.updatePileAttribute(cardSize);
    };

    Pile.prototype.setArrayPosition = function(row, col){
        this.attr.setArrayPosition(row, col);
    };

    Pile.prototype.getArrayPosition = function(){
        return this.attr.getArrayPosition();
    };

    Pile.prototype.getId = function(){
        return this.attr.getId();
    };

    Pile.prototype.addCards = function(givenCards){
        for (var i = 0; i < givenCards.length; i++) {
            var card = givenCards[i];
            this.cards.push(givenCards[i]);
        }
    };

    Pile.prototype.removeCards = function(numberOfCards){
        this.cards.length = this.cards.length - numberOfCards;
    };

    Pile.prototype.getCards = function(){
        return this.cards;
    };

    model.getPile = function (cascading, vertical, type, startingCardsCount) {
        return new Pile(cascading, vertical, type, startingCardsCount);
    };

})(model);