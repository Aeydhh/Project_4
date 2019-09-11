import React, { Component } from 'react'
import axios from 'axios'
import ConsoleDevice from './ConsoleDevice'
import { Link } from 'react-router-dom'

class ConsolesList extends Component {

    state = {
        consolePosts: [],

    }
    componentDidMount() {
        axios.get("https://shutdown-2modles-api.herokuapp.com/consoles.json")
            .then(response => {
                this.setState({ consolePosts: response.data })
                // console.log(response)
            });
    }


    render() {
        //consle card content on the list page 
        let consolePosts = this.state.consolePosts.map((consolePost, id) => {
            return <ConsoleDevice
                key={consolePost.id}
                id={consolePost.id}
                title={consolePost.title}
                image1={consolePost.img1}

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
\            </div>
        )
    }
}

export default ConsolesList
