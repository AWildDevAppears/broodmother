import { Component } from "react";
import Game, { IGameState } from "../../store/Game";

export default class BroodStats extends Component<{}, IGameState> {
    constructor( props: Object ) 
    {
        super( props );
        this.state = Game.getState();
        Game.subscribe( () => this.setState( Game.getState() ) );
    }

    render()
    {
        return (
            <div>
                <h2>Broodmother</h2>
                
                <ul className="list-unstyled">
                    <li>Health: { this.state.health }</li>
                    <li>Brood: { this.state.broodCount }</li>
                    <li>Food { this.state.food } ({ this.state.consumptionPerTurn } food used per turn)</li>
                </ul>
            </div>
        );
    }

}