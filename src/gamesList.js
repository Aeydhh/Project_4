import React, { Component } from 'react'
import axios from 'axios'
import Game from './game'
import { Link } from 'react-router-dom'

class GamesList extends Component {
    state = {
        gamePosts: [],

    }
    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/games.json")
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
                img2={gamePost.img2}
                img3={gamePost.img3}
                img4={gamePost.img4}
                video1={gamePost.video1}
                video2={gamePost.video2}
                aboutgame={gamePost.aboutgame}
                platform={gamePost.platform}
                genre={gamePost.genre}
                hint={gamePost.hint}
                try={gamePost.try}
                buy={gamePost.buy}


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
