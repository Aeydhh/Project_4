import React, { Component } from 'react'
import axios from 'axios'
import Game from './game'
import FullGame from './FullGame'
import { Link } from 'react-router-dom'

class GamesList extends Component {
    state = {
        GamesPosts: [],
        selectedGameId: null

    }
    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/games.json")
            .then(response => {
                this.setState({ GamesPosts: response.data })
                // console.log(response)
            });
    }

    gameSelectedHandler = (id) => {
        this.setState({ selectedGameId: id })
    }
    render() {
        const GamesPosts = this.state.GamesPosts.map((GamesPost, id) => {
            return <Game
                key={GamesPost.id}
                image={GamesPost.img1}
                title={GamesPost.title}
                clicked={() => this.gameSelectedHandler(GamesPost.id)} />
        })
        return (
            <div>
                <React.Fragment>
                    <Link to="/new_game">New Game</Link>
                </React.Fragment>

                <div>
                    {GamesPosts}
                </div>
                <FullGame id={this.state.selectedGameId} />
            </div>
        )
    }
}

export default GamesList
