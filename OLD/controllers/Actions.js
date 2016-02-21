var controller = controller || {};

(function (controller){
    var Action = function(log, settings){
        this.log = log;
        this.settings = settings;
        this.cardView = view.getCardView();
    };

    Action.prototype.undo = function(piles, cardSize){
        var result = this.log.undoMove();
        if(result == "Forgot"){
            console.log("I dont remember ...");
        }
        else{
            var lastMoveArgs = result.split("|");
            var command = lastMoveArgs[0];
            var oldPile = piles[lastMoveArgs[1]];
            var newPile = piles[lastMoveArgs[2]];
            // TODO make undo for toFoundation draw
            if(command == "redraw"){
                for (var i = newPile.cards.length-1; i >= 0 ; i--) {
                    oldPile.addCards([newPile.cards[i]]);
                    this.cardView.changeCardPosition(oldPile.cards[oldPile.cards.length-1], oldPile, cardSize);
                    newPile.removeCards(1);
                }
            }
            else{
                var cardsDrawn = parseInt(lastMoveArgs[3]);
                for (var i = 0; i < cardsDrawn; i++) {
                    oldPile.addCards([newPile.cards[newPile.cards.length-1]]);
                    this.cardView.changeCardPosition(oldPile.cards[oldPile.cards.length-1], oldPile, cardSize);
                    newPile.removeCards(1);
                }
            }
        }
    };

    Action.prototype.drawCards = function(piles, pile, selectedCard, cardSize){
        if(this.settings.type == "piramid" && selectedCard != null){

        }
        else{
            if(this.settings.drawType == "toPlacepile"){
                for (var id in piles) {
                    if(piles[id].type=="placepile"){
                        for (var i = 0; i < this.settings.cardsToDraw; i++) {
                            piles[id].addCards([pile.cards[pile.cards.length-1]]);
                            this.cardView.changeCardPosition(piles[id].cards[piles[id].cards.length-1], piles[id], cardSize);
                            pile.removeCards(1);
                        }
                        this.log.addMove("draw card", pile.getId(), piles[id].getId(), this.settings.cardsToDraw);
                    }
                }
            }
            else if(this.settings.drawType == "toFoundation"){
                for (var id in piles) {
                    if(piles[id].type=="foundation"){
                        for (var i = 0; i < this.settings.cardsToDraw; i++) {
                            piles[id].addCards([pile.cards[pile.cards.length-1]]);
                            this.cardView.changeCardPosition(piles[id].cards[piles[id].cards.length-1], piles[id], cardSize);
                            pile.removeCards(1);
                        }
                        this.log.addMove("draw card", pile.getId(), piles[id].getId(), this.settings.cardsToDraw);
                    }
                }
            }
        }
    };

    Action.prototype.redrawPile = function(piles, pile, cardSize){
        for (var id in piles) {
            if(piles[id].type=="placepile"){
                for (var i = piles[id].cards.length-1; i >= 0 ; i--) {
                    pile.addCards([piles[id].cards[i]]);
                    this.cardView.changeCardPosition(pile.cards[pile.cards.length-1], pile, cardSize);
                    piles[id].removeCards(1);
                }

                this.log.addMove("redraw", piles[id].getId(), pile.getId());
            }
        }
    };

    controller.getAction = function (log, settings) {
        return new Action(log, settings);
    };

})(controller);
