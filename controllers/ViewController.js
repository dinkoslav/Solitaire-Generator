var controller = controller || {};

(function (controller){
    var ViewController = function(piles, dimension){
        this.piles = piles;
        this.cardView = view.getCardView();
        this.pileView = view.getPileView();
        this.cardSize = dimension.getCardSize();
    };

    ViewController.prototype.placeAllPilesAndCards = function(){
        for(var id in this.piles){
            this.pileView.placePileOnGameField(this.piles[id], this.cardSize);
            for(var cardId = 0; cardId < this.piles[id].cards.length; cardId++){
                this.cardView.addCardToField(this.piles[id].cards[cardId], this.piles[id], cardId, this.cardSize);
            }
        }
    };


    controller.getViewController = function (piles, dimension) {
        return new ViewController(piles, dimension);
    };

})(controller);

