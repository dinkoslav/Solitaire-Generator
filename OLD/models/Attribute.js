var model = model || {};

// Attribute class is holding the position and the dimensions of any
// object of the game. Every card have fixed width and height, but the
// piles will have dimensions depending on the cards count and the
// pile type. Also the are the row, col and id for every pile/card.
(function (model){
    var Attribute = function(){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.row = 0;
        this.col = 0;
        this.id = null;
    };

    Attribute.prototype.getPosition = function(){
        return {
            x : this.x,
            y: this.y
        }
    };

    Attribute.prototype.setPosition = function(x, y){
        this.x = x;
        this.y = y;
    };

    Attribute.prototype.setArrayPosition = function(row, col){
        this.row = row;
        this.col = col;
        this.id = this.row + "-" + this.col;
    };

    Attribute.prototype.getArrayPosition = function(){
        return {
            row: this.row,
            col: this.col
        }
    };

    Attribute.prototype.setCardId = function(pileId, positionInPile){
        this.id = pileId + "-" + positionInPile;
    };

    Attribute.prototype.getDimension = function(){
        return {
            width: this.width,
            height: this.height
        }
    };

    Attribute.prototype.getId = function(){
        return this.id;
    };

    Attribute.prototype.setDimension = function(width, height){
        this.width = width;
        this.height = height;
    };

    Attribute.prototype.updateCardAttribute = function(cardSize, cardsInPile, positionInPile, pile){
        this.setDimension(cardSize.cardWidth, cardSize.cardHeight);
        if(pile.cascading){
            if(pile.vertical){
                this.x = 0;
                if(cardsInPile > 14){
                    this.y = positionInPile * ((pile.getDimension().height))/cardsInPile;
                }
                else{
                    this.y = positionInPile * (pile.getDimension().height/7);
                }
            }
            else{
                this.y = 0;
                if(cardsInPile > 8){
                    this.x = positionInPile * ((pile.getDimension().width))/cardsInPile;
                }
                else{
                    this.x = positionInPile * (this.height/4);
                }
            }
        }
        else{
            this.x = 0;
            this.y = 0;
        }
    };

    Attribute.prototype.updatePileAttribute = function(cardSize){
        this.width = cardSize.cardWidth;
        this.height = cardSize.cardHeight;
        this.x = ((this.col * (this.width + (this.width/10)))/4) + 10;
        this.y = ((this.row * (this.height + (this.height/10)))/5) + 10;
    };

    model.getAttribute = function (x, y) {
        return new Attribute(x, y);
    };

})(model);