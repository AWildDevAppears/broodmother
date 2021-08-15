import Brood from "../../models/Brood";

const GameActions = {
    GAME_START: {
        type: 'GAME_START',
    },
    GAME_STATE_UPDATED: {
        type: 'GAME_STATE_UPDATED',
    },
    GAME_PURCHASE_BROOD: ( brood: Brood ) => {
        return {
            type: 'GAME_PURCHASE_BROOD',
            brood,
        }
    },
};

export default GameActions;