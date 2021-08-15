import { Component } from "react";
import Brood from "../../models/Brood";
import Game from "../../store/Game";
import GameActions from "../../store/Game/actions";


export class BroodFactory extends Component {
    constructor( props: Object )
    {
        super( props );
        this.state = Game.getState();
        Game.subscribe( () => this.setState( Game.getState() ) );
    }

    render()
    {
        return (
            <section>
                <form action="">
                    <input type="button" value="Create Brood" onClick={ this.createBrood } />
                </form>
            </section>
        );
    }

    createBrood = () => {
        Game.dispatch( GameActions.GAME_PURCHASE_BROOD( new Brood(), ) )
    }
}