var model = model || {};

(function (model){
    var Card = function(rank, suit, face){
        this.attr = model.getAttribute();
        this.rank = rank;
        this.suit = suit;
        this.face = face;
    };

    Card.prototype.getPosition = function(){
        return this.attr.getPosition();
    };

    Card.prototype.setPosition = function(x, y){
        return this.attr.setPosition(x, y);
    };

    Card.prototype.getDimension = function(){
        return this.attr.getDimension();
    };

    Card.prototype.updateAttribute = function(dimensions, cardsInPile, positionInPile, pile){
        this.attr.updateCardAttribute(dimensions, cardsInPile, positionInPile, pile);
    };

    Card.prototype.getFace = function(){
        return this.face;
    };

    Card.prototype.setId = function(pileId, positionInPile){
        this.attr.setCardId(pileId, positionInPile);
    };

    Card.prototype.getId = function(){
        return this.attr.getId();
    };

    Card.prototype.flip = function(){
        this.face = !this.face;
    };

    model.getCard = function (rank, suit, face) {
        return new Card(rank, suit, face);
    };

})(model);