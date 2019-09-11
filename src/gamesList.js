import React, { Component } from 'react'
import axios from 'axios'
import Game from './game'
import { Link } from 'react-router-dom'

class GamesList extends Component {
    state = {
        gamePosts: [],

    }
    componentDidMount() {
        // axios.get("https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/games.json")
        axios.get("https://shutdown-2modles-api.herokuapp.com/games.json")
            .then(response => {
                this.setState({ gamePosts: response.data })
                // console.log(response)
            });
    }

    // gameSelectedHandler = (id) => {
    //     this.setState({ selectedGameId: id })
    // }
    render() {
        const gamePosts = this.state.gamePosts.map((gamePost, id) => {
            return <Game
                key={gamePost.id}
                id={gamePost.id}
                image={gamePost.img1}
                title={gamePost.title}
   

              />
        })
        return (
            <div>
                <React.Fragment>
                    <Link to="/new_game">New Game</Link>
                </React.Fragment>

                <div>
                    {gamePosts}
                </div>
                {/* <FullGame id={this.state.selectedGameId} /> */}
            </div>
        )
    }
}

export default GamesList
