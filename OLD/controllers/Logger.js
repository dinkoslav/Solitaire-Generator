var controller = controller || {};

(function (controller){
    var Logger = function(){
        this.movesHistory = [];
        this.history = [];
    };

    Logger.prototype.undoMove = function(){
        if(this.movesHistory.length > 0){
            var lastMove = this.movesHistory[this.movesHistory.length-1];
            var lastMoveArgs = lastMove.split("|");
            this.history.push("undo|" + lastMoveArgs[2] + "|" + lastMoveArgs[1]);
            this.movesHistory.pop();
            return lastMove;
        }
        else{
            return "Forgot";
        }

    };

    Logger.prototype.addMove = function(moveType, oldPositionId, newPositionId, cardsDrawn){
        this.history.push(moveType + "|" + oldPositionId + "|" + newPositionId + "|" + cardsDrawn);
        if(this.movesHistory.length >= 30){
            this.movesHistory.shift();
        }

        this.movesHistory.push(moveType + "|" + oldPositionId + "|" + newPositionId + "|" + cardsDrawn);
    };

    Logger.prototype.exportLoggers = function(){
        console.log(this.history);
    };

    controller.getLogger = function () {
        return new Logger();
    };

})(controller);
