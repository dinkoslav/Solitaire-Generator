var view = view || {};

(function (view){
    var CardView = function(){
    };

    CardView.prototype.addCardToField = function(card, pile, placeInPile, cardSize){
        card.updateAttribute(cardSize, pile.startingCardsCount, placeInPile, pile);
        var cardPosition = card.getPosition();
        var cardDimensions = card.getDimension();
        var cardTag = $("<div class='card' id='" + card.getId() + "'></div>");
        $('#' + pile.getId()).append(cardTag);
        $('#' + card.getId()).css({
            "background": "url(cards/default/"+ card.rank + card.suit + ".png)",
            "background-size": "100% 100%",
            "background-repeat": "no-repeat",
            "top": cardPosition.y,
            "width": cardDimensions.width,
            "height": cardDimensions.height});
    };

    CardView.prototype.updateCardOnField = function(card, pile, cardSize){
        $card = $('#' + card.getId());
        var positionInPile = (card.getId().split("-"))[2];
        card.updateAttribute(cardSize, pile.startingCardsCount, positionInPile, pile);
        var cardPosition = card.getPosition();
        var cardDimensions = card.getDimension();
        $card.css({
            "left" : cardPosition.x,
            "top": cardPosition.y,
            "width": cardDimensions.width,
            "height": cardDimensions.height
        });
    };



    CardView.prototype.changeCardPosition = function(card, pile, cardSize){
        $card = $('#' + card.getId());
        var positionInPile = (pile.cards.length-1);
        card.setId(pile.getId(), positionInPile);
        card.updateAttribute(cardSize, pile.cards.length, positionInPile, pile);
        var cardPosition = card.getPosition();
        var cardDimensions = card.getDimension();
        $card.attr("id",card.getId());
        $('#' + pile.getId()).append($card);
        $card.css({
            "left" : cardPosition.x,
            "top": cardPosition.y,
            "width": cardDimensions.width,
            "height": cardDimensions.height
        });
    };

    view.getCardView = function () {
        return new CardView();
    };

})(view);

