import React, { Component } from 'react'
import axios from 'axios'
import Console from './Console'
import FullConsole from './FullConsole'
import { Link } from 'react-router-dom'

class ConsolesList extends Component {

    state = {
        consolePosts: [],

    }
    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles.json")
            .then(response => {
                this.setState({ consolePosts: response.data })
                // console.log(response)
            });
    }
    // // only deletes it locally on refrish it comes back
    //     consoleSlectedHandler = (key) => {
    //         this.setState({consolePosts: this.state.consolePosts.filter(consolePost => consolePost.id !== key )})

    //     }

    render() {
        //consle card content on the list page 
        let consolePosts = this.state.consolePosts.map((consolePost, id) => {
            return <Console
                key={id}
                title={consolePost.title}
                image1={consolePost.img1}
                image2={consolePost.img2}
                image3={consolePost.img3}
                image4={consolePost.img4}
                platform={consolePost.platform}
                emu={consolePost.emu}
                system={consolePost.system}
                video1={consolePost.video1}
                video2={consolePost.video2}
                info={consolePost.info}
                about={consolePost.about}
                price={consolePost.price}
                buy={consolePost.buy}
            />
        })
        return (
            <div>
                <React.Fragment>
                    <Link to="/new_console">New Console</Link>
                </React.Fragment>

                <div>
                    {consolePosts}
                </div>
                {/* <FullConsole id={this.state.selectedGameId} /> */}
            </div>
        )
    }
}

export default ConsolesList
