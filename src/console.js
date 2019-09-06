import React, { Component } from 'react'
import Game from './game'
import './console.css'
export class Console extends Component {
    render() {
        return (
            <div>
                <div className="appNameContainer">
                    <div className="appName">SHUTDOWN</div>
                    {/* <p><input></input></p> */}
\\                    <img className="consoleimg" src="https://cdn2.iconfinder.com/data/icons/game-device-5/512/xone_controller_gray-512.png" />
                    <div className="consoleMiniContainer">
                        <h1>Console</h1>
                    </div>
                </div>
                <Game />
            </div>
        )
    }
}

export default Console
