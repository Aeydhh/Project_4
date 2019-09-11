import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button} from "reactstrap";
import './FullConsole.css'


export class FullConsole extends Component {
    state = {
        currentConsole: ''
    }
    // Show a single console full post
    componentDidMount() {
        console.log("Hello from the other side")
        axios.get(`https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}.json`)
            .then(response => {
                this.setState({ currentConsole: response.data })
                // console.log(response)
            });
    }
    // Delet a single console post
    deletConsoleHandler = (e) => {
        e.preventDefault();
        axios.delete(`https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}.json`)
            .then(response => {
                console.log(response)
                this.props.history.push('/consoles_list');

            })
    }


    render() {

        return (

            <div className="fullpage" >
                <div className="update">
                    <Link to={`/updateConsole/${this.props.match.params.id}/edit`}>Edit</Link>
                    <Button color="link" onClick={this.deletConsoleHandler}>Delete</Button>
                </div>
                <h1 className="console-Title" style={{ color: 'white' }}>{this.state.currentConsole.title}</h1>
                <div>
                    <div >

                        <div class="c">
                            <div className="infoContainer">
                                {/* <p>Platform: <small>{this.state.currentConsole.platform}</small> </p> */}
                                <p><strong>Emulators:</strong> <small>{this.state.currentConsole.emu} </small></p>
                                <p><strong> System: </strong> <small>{this.state.currentConsole.system}</small></p>
                            </div>
                            <div class="Container">

                                {/* <h5> {this.state.currentConsole.title}</h5> */}
                                <p> <img src={this.state.currentConsole.img1} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentConsole.img2} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentConsole.img3} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <p> <img src={this.state.currentConsole.img4} alt="avatar" className="card_img" width="60%" height="100%" /></p>
                                <br/>
                                <p className="about">{this.state.currentConsole.about}</p> 
                                <br/>
                                <div dangerouslySetInnerHTML={{ __html: this.state.currentConsole.video1}} width="70%" height="440" />
                                <div dangerouslySetInnerHTML={{ __html: this.state.currentConsole.video2}} width="70%" height="440" />
                                {/* <p><a href={this.state.currentConsole.info}>More info</a></p> */}
                                <p><strong>Price: </strong><small>{this.state.currentConsole.price}</small></p>
                                <p><a href={this.state.currentConsole.buy}>Buy</a></p>
                
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        )
    }
}

export default FullConsole

