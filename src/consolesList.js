import React, { Component } from 'react'
import axios from 'axios'
import Console from './Console'

class ConsolesList extends Component {
    state = {
        consolePosts: []
 
    }
    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json")
            .then(response => {
                this.setState({ consolePosts: response.data })
                // console.log(response)
            });
    }
    render() {
        const consolePosts = this.state.consolePosts.map((consolePost, id) => {
            return <Console 
            key={consolePost.id} 
            image={consolePost.image}
            title={consolePost.eventName} />
        })
        return (
            <div>
              {consolePosts}
            </div>
        )
    }
}

export default ConsolesList
