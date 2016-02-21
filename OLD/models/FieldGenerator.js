var model = model || {};

(function (model){
    var settings = {};
    var field = [];

    function addPile(pile, row, col){
        pile.setArrayPosition(row, col);
        field[row][col]=(pile);
    }

    function makeEmptyField(){
        field = new Array(29);
        for (var i = 0; i < field.length; i++) {
            field[i] = new Array(45);
        }
    }

    function applySettings(){
        for (var row in settings) {
            for (var col in settings[row]) {
                var pileSettings = settings[row][col];
                var pile = model.getPile(
                    pileSettings.cascading,
                    pileSettings.cascading ? pileSettings.vertical : false,
                    pileSettings.type,
                    pileSettings.cards.count);
                addPile(pile, row, col);
            }
        }
    }

    model.getFieldPiles = function(fieldSettings) {
        settings = fieldSettings;
        makeEmptyField();
        applySettings();
        return field;
    };

})(model);
