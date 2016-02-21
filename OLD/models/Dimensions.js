var model = model || {};

(function (model){
    var Dimensions = function(pilesCount){
        $gameField = $('#field');
        this.pilesCount = pilesCount;
        this.cardWidth = 0;
        this.cardHeight = 0;
        this.updateFieldSize();
    };

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

    Dimensions.prototype.updateCardSize = function(){
        this.cardWidth = ($('#field').width() - 20)/(this.pilesCount.pilesInRow + 1.1);
        this.cardHeight = ($('#field').height() - 20)/(this.pilesCount.pilesInCol + 0.4);
    };

    Dimensions.prototype.getCardSize = function(){
        return {
            cardWidth: this.cardWidth,
            cardHeight: this.cardHeight
        }
    };

    model.getDimensions = function (pilesCount) {
        return new Dimensions(pilesCount);
    };

})(model);

