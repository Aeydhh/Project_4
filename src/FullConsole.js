import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import consoleContent from './consoleContent'
import { Button, Input } from "reactstrap";
import './FullConsole.css'


export class FullConsole extends Component {
    state = {
        currentConsole: ''
    }
    // Show a single console full post
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}.json`)
            .then(response => {
                this.setState({ currentConsole: response.data })
                // console.log(response)
            });
    }
    // Delet a single console post
    deletConsoleHandler = (e) => {
        e.preventDefault();
        axios.delete(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}.json`)
            .then(response => {
                console.log(response)
            })
    }


    render() {

        return (

            <div className="fullpage" >
                <div className="update">
                    <Link to={`/updateConsole/${this.props.match.params.id}`}>Edit</Link>
                    <Button color="link" onClick={this.deletConsoleHandler}>Delete</Button>
                </div>
                <h1 className="console-Title" style={{ color: 'white' }}>{this.state.currentConsole.title}</h1>
                <div>
                    <div >

                        <div class="c">
                            <div className="infoContainer">
                                <p>Platform: <small>{this.state.currentConsole.platform}</small> </p>
                                <p>Emulator: {this.state.currentConsole.emu} </p>
                                <p>Systom: {this.state.currentConsole.system}</p>
                            </div>
                            <div class="consoleContainer">

                                {/* <h5> {this.state.currentConsole.title}</h5> */}
                                <p> <img src={this.state.currentConsole.img1} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentConsole.img2} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentConsole.img3} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentConsole.img4} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <video src={this.state.currentConsole.video1} width="520" height="240"></video> </p>
                                <p><video src={this.state.currentConsole.video2} width="520" height="240"></video>
                                <p>For more info: <a>{this.state.currentConsole.info}</a></p>
                                <p>About the Console: {this.state.currentConsole.about}</p> </p>
                                <p>Price: {this.state.currentConsole.price}</p>
                                <p>Buy: <a>{this.state.currentConsole.buy}</a></p>

                            </div>

                        </div>
                    </div>


                </div>


            </div>
        )
    }
}

export default FullConsole

