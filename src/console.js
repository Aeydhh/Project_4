import React, { Component } from 'react'
import './console.css'
export class Console extends Component {
    render() {
        return (
            <div className="consoleContainer">
                <img src="https://cdn2.iconfinder.com/data/icons/game-device-5/512/xone_controller_gray-512.png" />
                <div className="consoleMiniContainer">
                    <h1>console</h1>
                </div>
            </div>
        )
    }
}

export default Console
