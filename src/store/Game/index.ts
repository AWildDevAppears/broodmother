import { AnyAction, createStore } from 'redux';
import Brood from '../../models/Brood';

enum BroodCosts {
    DefaultBrood = 10,
}

enum ErrorCodes {
    NOT_ENOUGH_FOOD = '(ERROR) Not enough food to make Brood',
}

export interface IGameState {
    health: number,
    food: number,
    currentBrood: Brood[],
    consumptionPerTurn: number,
    broodCount: number,
}

const initialState: IGameState = {
    health: 100,
    food: 10,
    currentBrood: [],
    consumptionPerTurn: 0,
    broodCount: 0,

}

 const reducer = ( state = initialState, action: AnyAction ): IGameState => {
    switch ( action.type ) {
        case 'GAME_START':
            return {
                ...initialState,
            }
        case 'GAME_PURCHASE_BROOD':
            const brood = action.brood;
            const currentBrood = state.currentBrood;
            currentBrood.push( brood );
            const consumptionPerTurn = state.consumptionPerTurn + brood.consumptionPerTurn;
            const food = state.food - brood.cost;

            if( state.food <= 0 || food < 0 ) {
                return {
                    ...state,
                };
            }

            return {
                ...state,
                currentBrood,
                broodCount: currentBrood.length,
                consumptionPerTurn,
                food,
            }
        default: 
            return state;
    }
 }

 export default createStore( reducer );

