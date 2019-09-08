import React, { Component } from 'react'
import axios from 'axios'
// import consoleContent from './consoleContent'
import { Button, Input } from "reactstrap";

export class FullConsole extends Component {
    state = {
        currentConsole: ''
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}.json`)
            .then(response => {
                this.setState({ currentConsole: response.data })
                // console.log(response)
            });
    }
    render() {

        return (
            <div>
                <h1 style={{ color: 'white' }}>{this.state.currentConsole.title}</h1>
                <div className="consoleCard">
                    <div className="flex-container">

                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{this.state.currentConsole.title}</h5>
                                <img src={this.state.currentConsole.img1} alt="avatar" className="card_img" width="30%" height="100%" />
                                <img src={this.state.currentConsole.img2} alt="avatar" className="card_img" width="30%" height="100%" />
                                <img src={this.state.currentConsole.img3} alt="avatar" className="card_img" width="30%" height="100%" />
                                <img src={this.state.currentConsole.img3} alt="avatar" className="card_img" width="30%" height="100%" />
                                <h5 class="card-title">{this.state.currentConsole.platform} platform</h5>
                                <h5 class="card-title">{this.state.currentConsole.emu} emu</h5>
                                <h5 class="card-title">{this.state.currentConsole.system}systm</h5>
                                <h5 class="card-title">{this.state.currentConsole.video1}</h5>
                                <h5 class="card-title">{this.state.currentConsole.video2}</h5>
                                <h5 class="card-title">{this.state.currentConsole.info}info</h5>
                                <h5 class="card-title">{this.state.currentConsole.about}about</h5>
                                <h5 class="card-title">{this.state.currentConsole.price}price</h5>
                                <h5 class="card-title">{this.state.currentConsole.buy}buy</h5>


                                <p class="card-text"><small class="text-muted">consolecontent.js</small></p>
                            </div>
                            <Button color="link">Edit</Button>
                            <Button color="link">Delete</Button>
                        </div>
                    </div>

                </div>

                )
            }
}            </div>
        )
    }
}

export default FullConsole

