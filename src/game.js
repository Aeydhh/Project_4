import React, { Component } from 'react'
import './game.css'


export class Game extends Component {
    render() {
        return (
            <div className="gameContainer">
                <img className="game" src="https://cdn2.iconfinder.com/data/icons/game-device-5/512/xone_controller_gray-512.png" />
                <div className="gameMiniContainer">
                    <h1>Game</h1>
                </div>
            </div>
        )
    }
}

export default Game
