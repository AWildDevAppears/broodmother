import { Component } from "react"
import Game from "../../store/Game";
import GameActions from "../../store/Game/actions";

export default class MainMenu extends Component {
    render()
    {
        return ( 
            <button onClick={ this.startGame } >Start game (TEMP)</button>
        )
    }

    startGame = () => {
        Game.dispatch( GameActions.GAME_START );
    }
}