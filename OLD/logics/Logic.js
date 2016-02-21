var logics = logics || {};

(function (logics){
    var Logic = function(settings){
        this.settings = settings;
        this.pileLogic = logics.getPileLogic();
        this.cardLogic = logics.getCardLogic();
    };

    // Ask card logic if there are possible moves with the event card or not.
    // Some of the commands return directly, probably new functions
    // will be added soon.
    Logic.prototype.checkNextCommandForCard = function(pile, card, selectedCard){
        var pileType = pile.type;
        switch(pileType){
            case "drawpile":
                if(this.cardLogic.drawCards(this.settings.type, this.settings.drawType, selectedCard)){
                    return "draw";
                }
                else{
                    return "notallowed";
                }
                break;
            case "collector":
                return "notallowed";
                break;
            case "placepile":
                if(this.cardLogic.takePlacepileCards(pile.cards.length)){
                    if(this.settings.type == "pyramid"){
                        if(selectedCard != null && selectedCard.getId() == card.getId()){
                            return "unselect";
                        }
                        else{
                            return "select";
                        }
                    }
                    else{
                        return "take";
                    }
                }
                else{
                    console.log("Nothing to take ...");
                    return "none";
                }
                break;
            case "select":
                return "select";
                break;
            case "foundation":
                if(this.cardLogic.canTakeCard(pile, card, this.settings.canTakeManyCards, this.settings.allowSuperMove, this.settings.cardsTakingType)){
                    return "take";
                }
                else{
                    return "notallowed";
                }
                break;
            default:
                return "none";
                break;
        }
    };

    // Ask pile logic if there are possible moves with the event pile or not.
    // Some of the commands return directly, probably new functions
    // will be added soon.
    Logic.prototype.checkNextCommandForPile = function(pile){
        var pileType = pile.type;
        switch(pileType){
            case "drawpile":
                if(this.pileLogic.drawPile(this.settings.drawType, this.settings.timesToDraw)){
                    return "redraw";
                }
                else{
                    return "notallowed";
                }
                break;
            case "collector":
                return "none";
                break;
            case "placepile":
                if(!this.pileLogic.placePile(pile.cards.length)){
                    console.log("Nothing to take ...");
                }
                return "none";
                break;
            case "foundation":
                return "none";
                break;
            default:
                return "none";
                break;
        }
    };

    logics.getLogic = function (settings) {
        return new Logic(settings);
    };

})(logics);