var controller = controller || {};

(function (controller){
    var GameSettings = function(json){
        this.game = null;
        this.field = null;
        this.json = json;
        this.parseJson();
    };

    GameSettings.prototype.parseJson = function(){
        // TODO here we will get json string and will have to parse it. For
        // now we just assign values.
        this.game = this.json.game;
        this.field = this.json.field;
    };

    GameSettings.prototype.getSettingsForGame = function(){
        return this.game;
    };

    GameSettings.prototype.getSettingsForField = function(){
        return this.field;
    };

    GameSettings.prototype.getPilesCount = function(){
        return {
            pilesInRow: this.game.pilesInRow,
            pilesInCol: this.game.pilesInCol
        };
    };

    controller.getGameSettings = function (json) {
        return new GameSettings(json);
    };

})(controller);