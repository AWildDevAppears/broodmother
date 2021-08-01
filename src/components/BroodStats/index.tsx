import { Component } from "react";
import Game from "../../models/Game";


interface IBroodStatsState {
    consumptionPerTurn: number;
    gameState: typeof Game;
}

export default class BroodStats extends Component<{}, IBroodStatsState> {
    constructor( props: Object ) 
    {
        super( props );
        this.state = {
            consumptionPerTurn: 0,
            gameState: Game,
        };
    }

    render()
    {
        return (
            <div>
                <h2>Broodmother</h2>
                
                <ul className="list-unstyled">
                    <li>Health: { this.state.gameState.health }</li>
                    <li>Brood: { this.state.gameState.currentBrood.length }</li>
                    <li>Food { this.state.gameState.food } ({ this.state.consumptionPerTurn } food used per turn)</li>
                </ul>
            </div>
        );
    }

}