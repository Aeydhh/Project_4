import React, { Component } from 'react'
import './game.css'


export class Game extends Component {
    render() {
        return (
            <div className="gameContainer">
                <img className="game" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b24a9eed-e429-4b22-802a-de76d97b053a/d7x327s-1e4ea09c-3c7e-44c4-98fa-040da8bf0695.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyNGE5ZWVkLWU0MjktNGIyMi04MDJhLWRlNzZkOTdiMDUzYVwvZDd4MzI3cy0xZTRlYTA5Yy0zYzdlLTQ0YzQtOThmYS0wNDBkYThiZjA2OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9elmpe6gUME2fG9mCelHu25Qz_g6RNwFlvBDtUn-Me8" />
                <div className="gameMiniContainer">
                    <h1>Game</h1>
                </div>
            </div>
        )
    }
}

export default Game
