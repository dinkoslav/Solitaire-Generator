var logics = logics || {};

(function (logics){
    var CardLogic = function(){
        this.ranks =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    };

    // If draw pile is selected and the pile has cards, you can draw as much
    // as told when game is made. In case of pyramid type game, if there is
    // a card selected, select the draw pile one and check conditions. Else
    // you can draw card to place pile or to foundation piles.
    CardLogic.prototype.drawCards = function(gameType, drawType, selectedCard){
        if(gameType == "pyramid"){
            return true;
        }
        else{
            if(drawType == "toPlacepile"){
                return true;
            }
            else if(drawType == "toFoundation"){
                return true;
            }
            else{
                return false;
            }
        }
    };

    // Depending on super moves, if you can pick only 1 card and the event
    // card is on top of the pile - then yes, else no. If you can take many,
    // depends on the take type:
    // "ss" - same suit with sequence ascending,
    // "ds" - different suit with sequence ascending,
    // "ssd" - same suit with sequence descending,
    // "dsd" - different suit with sequence descending,
    // "sns" - same suit without sequence,
    // "dns" - different suit without sequence
    // If super moves are allowed, the depends on one card foundation piles
    // that don't have cards.
    CardLogic.prototype.canTakeCard = function(pile, card, canTakeMany, allowSuperMove, cardsTakingType){
        var cardId = card.getId().split('-');
        var cardNumberInPile = parseInt(cardId[2]);
        if(allowSuperMove){

        }
        else{
            if(cardNumberInPile == pile.cards.length-1){
                if(!pile.cards[cardNumberInPile].face){
                    return false;
                }

                return true;
            }
            else if(canTakeMany){
                switch(cardsTakingType){
                    case "ss":
                        for (var i = cardNumberInPile; i <= pile.cards.length - 2; i++) {
                            if(!pile.cards[i].face || !pile.cards[i+1].face){
                                return false;
                            }

                            if(pile.cards[i].suit != pile.cards[i+1].suit){
                                return false;
                            }

                            if(pile.cards[i].rank == "A"){
                                if(pile.cards[i+1].rank != "2"){
                                    return false;
                                }
                            }
                            else{
                                if(this.ranks.indexOf(pile.cards[i+1].rank) - 1 != this.ranks.indexOf(pile.cards[i].rank)){
                                    return false;
                                }
                            }
                        }

                        return true;
                        break;
                    case "ds":
                        for (var i = cardNumberInPile; i <= pile.cards.length - 2; i++) {
                            if(!pile.cards[i].face || !pile.cards[i+1].face){
                                return false;
                            }

                            if(pile.cards[i].rank == "A"){
                                if(pile.cards[i+1].rank != "2"){
                                    return false;
                                }
                            }
                            else{
                                if(this.ranks.indexOf(pile.cards[i+1].rank) - 1 != this.ranks.indexOf(pile.cards[i].rank)){
                                    return false;
                                }
                            }
                        }

                        return true;
                        break;
                    case "ssd":
                        for (var i = cardNumberInPile; i <= pile.cards.length - 2; i++) {
                            if(!pile.cards[i].face || !pile.cards[i+1].face){
                                return false;
                            }

                            if(pile.cards[i].suit != pile.cards[i+1].suit){
                                return false;
                            }

                            if(pile.cards[i].rank == "2"){
                                if(pile.cards[i+1].rank != "A"){
                                    return false;
                                }
                            }
                            else{
                                if(this.ranks.indexOf(pile.cards[i].rank) - 1 != this.ranks.indexOf(pile.cards[i+1].rank)){
                                    return false;
                                }
                            }
                        }

                        return true;
                        break;
                    case "dsd":
                        for (var i = cardNumberInPile; i <= pile.cards.length - 2; i++) {
                            if(!pile.cards[i].face || !pile.cards[i+1].face){
                                return false;
                            }

                            if(pile.cards[i].rank == "2"){
                                if(pile.cards[i+1].rank != "A"){
                                    return false;
                                }
                            }
                            else{
                                if(this.ranks.indexOf(pile.cards[i].rank) - 1 != this.ranks.indexOf(pile.cards[i+1].rank)){
                                    return false;
                                }
                            }
                        }

                        return true;
                        break;
                    case "sns":
                        for (var i = cardNumberInPile; i < pile.cards.length - 2; i++) {
                            if(!pile.cards[i].face || !pile.cards[i+1].face){
                                return false;
                            }

                            if(pile.cards[i].suit != pile.cards[i+1].suit){
                                return false;
                            }
                        }

                        return true;
                        break;
                    case "dns":
                        for (var i = cardNumberInPile; i < pile.cards.length - 2; i++) {
                            if(!pile.cards[i].face || !pile.cards[i+1].face){
                                return false;
                            }
                        }

                        return true;
                        break;
                    default:
                        return false;
                        break;
                }
            }
            else{
                return false;
            }
        }
    };

    // You are always able to take or select from place pile if there are
    // any cards in it.
    CardLogic.prototype.takePlacepileCards = function(cardsCount){
        if(cardsCount > 0){
            return true;
        }
        else{
            return false;
        }
    };

    logics.getCardLogic = function () {
        return new CardLogic();
    };

})(logics);

