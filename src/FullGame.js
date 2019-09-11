import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import consoleContent from './consoleContent'
import { Button, Input} from "reactstrap";
import './FullConsole.css'

export class FullGame extends Component {
    state = {
        currentGame: ''
    }
    componentDidMount() {
        axios.get(`https://shutdown-2modles-api.herokuapp.com/games/${this.props.match.params.id}.json`)
            .then(response => {
                this.setState({ currentGame: response.data })
                // console.log(response)
            });
    }

    deletGameHandler = (e) => {
        e.preventDefault();
        axios.delete(`https://shutdown-2modles-api.herokuapp.com/games/${this.props.match.params.id}.json`)
            .then(response => {
                console.log(response)
                this.props.history.push('/games_list');

            })
    }


    render() {

        return (

            <div className="fullpage" >
                <div className="update">
                    <Link to={`/updateGame/${this.props.match.params.id}/edit`}><Button color="secondary" size="sm">Edit</Button></Link>
                    <Button color="secondary" size="sm" onClick={this.deletGameHandler}>Delete</Button>
                </div>
                <h1 className="console-Title" style={{ color: 'white' }}>{this.state.currentGame.title}</h1>
                <div>
                    <div >
                    <p className="about">{this.state.currentGame.aboutgame}</p> 
                        <div class="c">
                            <div className="infoContainer">
                                <p><strong>Platform:</strong> <small>{this.state.currentGame.platform}</small> </p>
                                <p><strong>Genre:</strong> <small>{this.state.currentGame.genre} </small></p>
                            </div>
                            <div class="Container">

                                {/* <h5> {this.state.currentGame.title}</h5> */}
                                <p> <img src={this.state.currentGame.img1} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentGame.img2} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentGame.img3} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentGame.img4} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <div dangerouslySetInnerHTML={{ __html: this.state.currentGame.video1}} />
                                <div dangerouslySetInnerHTML={{ __html: this.state.currentGame.video2}} />
                                <p className="about"><strong >Hints and Keys:</strong><small> {this.state.currentGame.hitnt}</small></p>
                                <Button ><a className="try" href={this.state.currentGame.try}>Play Game </a></Button>
                                <Button ><a className="try" href={this.state.currentGame.buy}>Buy </a></Button>

                            </div>

                        </div>
                    </div>


                </div>


            </div>
        )
    }
}
export default FullGame
