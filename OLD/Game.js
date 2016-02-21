$(window).ready(function () {
    //TODO make function to get JSON with game info from server and pass it to game settings.
    var engine = controller.getGameEngine(tempField);
});


var tempField = {
    game: {
        type: "klondike",
        decks: 2,
        pilesInRow: 9,
        pilesInCol: 4,
        drawType: "toPlacepile",
        timesToDraw: 2,
        cardsToDraw: 1,
        canTakeManyCards: true,
        allowSuperMove: false,
        cardsTakingType: "ssd"
    },
    field: {
        0: {
            0: {
                cascading: false,
                type: "drawpile",
                cardsFace: false,
                cards: {
                    count: 24
                }
            },
            4: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            8: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            12: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            16: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            20: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            24: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            28: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            32: {
                cascading: false,
                type: "collector",
                cardsFace: true,
                cards: {
                    count: 0
                }
            }
        },
        5: {
            0: {
                cascading: false,
                type: "placepile",
                cardsFace: true,
                cards: {
                    count: 0
                }
            },
            4: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            8: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            12: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            16: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            20: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            24: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            28: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            },
            32: {
                cascading: true,
                vertical: true,
                type: "foundation",
                cardsFace: true,
                cards: {
                    count: 10
                }
            }
        }
    }
};