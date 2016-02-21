var logics = logics || {};

(function (logics){
    var PileLogic = function(){
        this.timesDrawn = 0;
    };

    // If draw pile is empty and there are still times left to redraw,
    // then redraw, else not.
    PileLogic.prototype.drawPile = function(drawType, timesToDraw){
        if(drawType == "toPlacepile" && timesToDraw > this.timesDrawn){
            this.timesDrawn++;
            return true;
        }
        else{
            return false;
        }
    };

    // Still you can click on pile only when there are no cards in it.
    // Anyway you cant do nothing with empty place pile.
    PileLogic.prototype.placePile = function(cardsCount){
        if(cardsCount > 0){
            return true;
        }
        else{
            return false;
        }
    };

    logics.getPileLogic = function () {
        return new PileLogic();
    };

})(logics);
