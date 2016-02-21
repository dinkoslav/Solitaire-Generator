var controller = controller || {};

(function (controller){
    var Events = function(engine, gameField){
        this.cards = [];
        this.engine = engine;
        this.gameField = gameField;
        this.startEvents();
    };

    Events.prototype.startOnMouseMoveEvents = function(){

    };

    Events.prototype.startUndoEvents = function(){
        var _this = this;
        $("#undo").click(function(ev) {
            _this.engine.undo();
        });
    };

    Events.prototype.startOnMouseDownEvents = function(){
        var _this = this;
        $("#game-wrap").mousedown(function(ev) {
            var positions = (ev.target.id).split("-");
            var pile = _this.engine.findPile(positions[0] + "-" + positions[1]);
            if(ev.target.className == "card") {
                var card = _this.engine.findCard(pile, positions[2]);
                if (_this.engine.executeMouseDownOnCard(pile, card)) {
                    _this.startOnMouseMoveEvents();
                }
            }
            else if(ev.target.className == "pile"){
                if (_this.engine.executeMouseDownOnPile(pile)) {
                    _this.startOnMouseMoveEvents();
                }
            }
        });
    };

    Events.prototype.startOnWindowResizeEvents = function(){
        var _this = this;
        $(window).resize(function() {
            _this.gameField.updateFieldSize();
            _this.engine.updatePilesAndCards(_this.gameField.getCardSize());
        });
    };

    Events.prototype.startEvents = function(){
        this.startOnWindowResizeEvents();
        this.startOnMouseDownEvents();
        this.startOnMouseMoveEvents();
        this.startUndoEvents();
    };

    controller.getEvents = function (engine, gameField) {
        return new Events(engine, gameField);
    };

})(controller);