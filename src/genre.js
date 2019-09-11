import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './genre.css'
export class Genre extends Component {
    render() {
        return (
            <div>
                <div className="appNameContainer">
                    <div className="appName">SHUTDOWN</div>
                    {/* <p><input></input></p> */}
                    <div className="boxies">
                        <div className="consoleContainer" >
                            <img className="consoleimg" src="https://cdn2.iconfinder.com/data/icons/game-device-5/512/xone_controller_gray-512.png" alt="avatar" />
                            <nav className="consoleMiniContainer">
                                <h2><Link to="/consoles_list">Consoles</Link></h2>
                            </nav>
                        </div>
                        <div className="gameContainer">
                            <img className="game" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b24a9eed-e429-4b22-802a-de76d97b053a/d7x327s-1e4ea09c-3c7e-44c4-98fa-040da8bf0695.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyNGE5ZWVkLWU0MjktNGIyMi04MDJhLWRlNzZkOTdiMDUzYVwvZDd4MzI3cy0xZTRlYTA5Yy0zYzdlLTQ0YzQtOThmYS0wNDBkYThiZjA2OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9elmpe6gUME2fG9mCelHu25Qz_g6RNwFlvBDtUn-Me8" alt="avatar" />
                            <nav className="gameMiniContainer">
                                <h2><Link to="/games_list">Games</Link></h2>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Genre
