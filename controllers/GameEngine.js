var controller = controller || {};

(function (controller){
    var GameEngine = function(settings, piles, dimensions, viewController){
        this.settings = settings;
        this.piles = piles;
        this.dimensions = dimensions;
        this.view = viewController;
        this.selectedCard = null;
        this.events = controller.getEvents(this, this.dimensions);
        //this.logic = logics.getLogic(this.settings);
        //this.log = controller.getLogger();
        //this.action = controller.getAction(this.log, this.settings.getSettingsForGame());
    };

    GameEngine.prototype.findPile = function(id){
        return this.piles[id];
    };

    GameEngine.prototype.findCard = function(pile, id){
        return pile.cards[id];
    };

    GameEngine.prototype.updatePilesAndCards = function(){
        this.pileView.updatePiles(this.piles, this.dimensions.getCardSize());
    };

    GameEngine.prototype.undo = function(){
        this.action.undo(this.piles, this.dimensions.getCardSize());
    };

    GameEngine.prototype.drawCards = function(pile){
        this.action.drawCards(this.piles, pile, this.selectedCard, this.dimensions.getCardSize());
    };

    GameEngine.prototype.redraw = function(pile){
       this.action.redrawPile(this.piles, pile, this.dimensions.getCardSize())
    };

    GameEngine.prototype.takeCards = function(){
        console.log("take meh ...");
    };

    GameEngine.prototype.selectCards = function(card){
        console.log("selected");
        this.selectedCard = card;
    };

    GameEngine.prototype.unselectCards = function(){
        console.log("unselected");
        this.selectedCard = null;
    };

    GameEngine.prototype.executeMouseDownOnCard = function(pile, card){
        var command = this.logic.checkNextCommandForCard(pile, card, this.selectedCard);
        switch(command){
            case "draw":
                this.drawCards(pile);
                break;
            case "take":
                this.takeCards();
                break;
            case "select":
                this.selectCards(card);
                break;
            case "unselect":
                this.unselectCards();
                break;
            case "none":
                return false;
                break;
            case "notallowed":
                console.log("You cant do that ...");
                return false;
                break;
            default : break;
        }
    };

    GameEngine.prototype.executeMouseDownOnPile = function(pile){
        var command = this.logic.checkNextCommandForPile(pile);
        switch(command){
            case "redraw":
                this.redraw(pile);
                break;
            case "take":
                this.takeCards();
                break;
            case "none":
                return false;
                break;
            case "notallowed":
                console.log("You cant do that ...");
                return false;
                break;
            default : break;
        }
    };

    controller.getGameEngine = function (settings, piles, dimensions, viewController) {
        return new GameEngine(settings, piles, dimensions, viewController);
    };

})(controller);