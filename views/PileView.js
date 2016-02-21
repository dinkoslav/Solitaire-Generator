var view = view || {};

(function (view){
    var PileView = function(){
        this.cardView = view.getCardView();
    };

    // Updates all piles and cards
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

    // Place pile on Field
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

    // Update pile on field
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

    view.getPileView = function () {
        return new PileView();
    };

})(view);