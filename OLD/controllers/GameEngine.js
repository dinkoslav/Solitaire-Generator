var controller = controller || {};

(function (controller){
    var GameEngine = function(json){
        this.settings = controller.getGameSettings(json);
        this.dimensions = model.getDimensions(this.settings.getPilesCount());
        this.fieldPiles = model.getFieldPiles(this.settings.getSettingsForField());
        this.events = controller.getEvents(this, this.dimensions);
        this.piles = {};
        this.selectedCard = null;
        this.logic = logics.getLogic(this.settings.game);
        this.log = controller.getLogger();
        this.action = controller.getAction(this.log, this.settings.getSettingsForGame());
        this.deck = model.getDeck(this.settings.getSettingsForGame().decks);
        this.cardView = view.getCardView();
        this.pileView = view.getPileView();
        this.fieldView = view.getFieldView();
        this.prepareGameField();
    };

    GameEngine.prototype.prepareGameField = function(){
        this.placePilesOnGameField();
    };

    GameEngine.prototype.placePilesOnGameField = function(){
        this.piles = this.pileView.placePiles(this.fieldPiles, this.dimensions.getCardSize());
        this.pileView.addCardsToPiles(this.piles, this.deck, this.dimensions.getCardSize());
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

    controller.getGameEngine = function (json) {
        return new GameEngine(json);
    };

})(controller);