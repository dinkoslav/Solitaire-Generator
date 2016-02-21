var view = view || {};

(function (view){
    var PileView = function(){
        this.cardView = view.getCardView();
    };

    PileView.prototype.placePiles = function(field, cardSize){
        this.piles = {};
        for (var i = 0; i < field.length; i++) {
            for (var j = 0; j < field[i].length; j++) {
                if(field[i][j]){
                    this.placePileOnGameField(field[i][j], cardSize);
                    this.piles[i + "-" + j] = (field[i][j]);
                }
            }
        }

        return this.piles;
    };

    PileView.prototype.updatePiles = function(piles, cardSize){
        for (var id in piles) {
            var pile = piles[id];
            this.updatePileOnGameField(pile, cardSize);
            for (var j = 0; j < pile.cards.length; j++) {
                var card = pile.cards[j];
                this.cardView.updateCardOnField(card, pile, cardSize);
            }
        }
    };

    PileView.prototype.placePileOnGameField = function(pile, cardSize){
        $gameField = $('#field');
        pile.updateAttribute(cardSize);
        var position = pile.getPosition();
        var dimensions = pile.getDimension();
        var pileTag = $("<div class='pile' id='" + pile.getId() + "'></div>");
        $gameField.append(pileTag);
        $('#' + pile.getId()).css({
            "background-color": "blue",
            "left" : position.x,
            "top": position.y,
            "width": dimensions.width,
            "height": dimensions.height,
            "border": "1px solid black"});
    };

    PileView.prototype.updatePileOnGameField = function(pile, cardSize){
        $pile = $('#' + pile.getId());
        pile.updateAttribute(cardSize);
        var position = pile.getPosition();
        var dimensions = pile.getDimension();
        $pile.css({
            "left" : position.x,
            "top": position.y,
            "width": dimensions.width,
            "height": dimensions.height
        });
    };

    PileView.prototype.addCardsToPiles = function(piles, deck, cardSize){
        for (var i = 0; i < deck.cards.length; i++) {
            var cardIsNotPlaced = true;
            var card = deck.cards[i];
            while(cardIsNotPlaced){
                for (var id in piles) {
                    var pile = piles[id];
                    if(pile.cards.length < pile.startingCardsCount){
                        card.setId(pile.getId(), pile.cards.length);
                        pile.addCards([card]);
                        this.cardView.addCardToField(card, pile, cardSize);
                        cardIsNotPlaced = false;
                        break;
                    }
                }
            }
        }
    };

    view.getPileView = function () {
        return new PileView();
    };

})(view);