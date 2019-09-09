import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import consoleContent from './consoleContent'
import { Button, Input} from "reactstrap";

export class FullGame extends Component {
    state = {
        currentGame: ''
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/games/${this.props.match.params.id}.json`)
            .then(response => {
                this.setState({ currentGame: response.data })
                // console.log(response)
            });
    }

    deletGameHandler = (e) => {
        e.preventDefault();
        axios.delete(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/games/${this.props.match.params.id}.json`)
            .then(response => {
                console.log(response)
            })
    }


    render() {

        return (
            <div>
            <h1 style={{color:'white'}}>{this.state.currentGame.title}</h1>
             <div className="consoleCard">
             <div className="flex-container">

                <div class="col-md-8">
                         <div class="card-body">
                             <h5 class="card-title">{this.state.currentGame.title} Game Name</h5>
                             <img src={this.state.currentGame.img1} alt="avatar" className="card_img" width="30%" height="100%" />
                             <img src={this.state.currentGame.img2} alt="avatar" className="card_img" width="30%" height="100%" />
                             <img src={this.state.currentGame.img3} alt="avatar" className="card_img" width="30%" height="100%" />
                             <img src={this.state.currentGame.img4} alt="avatar" className="card_img" width="30%" height="100%" />
                             <h5 class="card-title">{this.state.currentGame.platform} platform</h5>
                             <h5 class="card-title">{this.state.currentGame.aboutgame} About the game</h5>
                             <h5 class="card-title">{this.state.currentGame.video1}Video 1</h5>
                             <h5 class="card-title">{this.state.currentGame.video2} Video 2</h5>
                             <h5 class="card-title">{this.state.currentGame.genre}Genre</h5>
                             <h5 class="card-title">{this.state.currentGame.hints}Hints</h5>
                             <h5 class="card-title">{this.state.currentGame.try}Try</h5>
                             <h5 class="card-title"> {this.state.currentGame.buy}buy</h5>


                             <p class="card-text"><small class="text-muted">consolecontent.js</small></p>
                         </div>
                         <Button color="link">Edit</Button>
                         <Button color="link" onClick={this.deletGameHandler}>Delete</Button>
                         </div>
                 </div>

             </div>

        )
    }
}            </div>
        )
    }
}

export default FullGame
