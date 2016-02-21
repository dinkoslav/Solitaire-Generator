var model = model || {};

// Dimensions class is responsible for the size of the field, cards and piles
(function (model){
    var Dimensions = function(pilesInRow, pilesInCol){
        $gameField = $('#field');
        this.pilesInRow = pilesInRow;
        this.pilesInCol = pilesInCol;
        this.cardWidth = 0;
        this.cardHeight = 0;
        this.updateFieldSize();
    };

    // Updates the field size depending on browser size
    Dimensions.prototype.updateFieldSize = function(){
        if($(window).height() * 1.7 > $(window).width()){
            $gameField.width($(window).width());
            $gameField.height($gameField.width() / 1.7);
        }
        else{
            $gameField.height($(window).height() - 50);
            $gameField.width($gameField.height() * 1.7);
        }

        this.updateCardSize();
    };

    // Updates the card size depending on field size
    Dimensions.prototype.updateCardSize = function(){
        this.cardWidth = ($('#field').width() - 20)/(this.pilesInRow + 1.1);
        this.cardHeight = ($('#field').height() - 20)/(this.pilesInCol + 0.4);
    };

    // Return card size
    Dimensions.prototype.getCardSize = function(){
        return {
            cardWidth: this.cardWidth,
            cardHeight: this.cardHeight
        }
    };

    model.getDimensions = function (pilesInRow, pilesInCol) {
        return new Dimensions(pilesInRow, pilesInCol);
    };

})(model);

