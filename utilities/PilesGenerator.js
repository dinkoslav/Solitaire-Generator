var utilities = utilities || {};

// PilesGenerator class is responsible for creation of all piles and
// the settings applied to them
(function (utilities){
    var settings = {};
    var field = [];
    var piles = {};
    var cards = [];

    // Add pile to the field
    function addPile(pile, row, col){
        pile.setArrayPosition(row, col);
        field[row][col]=(pile);
    }

    // Creates empty field as there can't be more than 29 rows and 45 cols
    function makeEmptyField(){
        field = new Array(29);
        for (var i = 0; i < field.length; i++) {
            field[i] = new Array(45);
        }
    }

    // Create each pile
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

    // Select only piles that will be used
    function selectPiles(){
        for (var i = 0; i < field.length; i++) {
            for (var j = 0; j < field[i].length; j++) {
                if(field[i][j]){
                    piles[i + "-" + j] = (field[i][j]);
                }
            }
        }
    }

    // Add all cards to piles
    function addCardsToPiles(){
        for (var i = 0; i < cards.length; i++) {
            var cardIsNotPlaced = true;
            var card = cards[i];
            while(cardIsNotPlaced){
                for (var id in piles) {
                    var pile = piles[id];
                    if(pile.cards.length < pile.startingCardsCount){
                        card.setId(pile.getId(), pile.cards.length);
                        piles[id].addCards([card]);
                        cardIsNotPlaced = false;
                        break;
                    }
                }
            }
        }
    }

    utilities.getPiles = function(fieldSettings, decksCards) {
        settings = fieldSettings;
        cards = decksCards;
        makeEmptyField();
        applySettings();
        selectPiles();
        addCardsToPiles();
        return piles;
    };

})(utilities);
