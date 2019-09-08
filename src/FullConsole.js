import React, { Component } from 'react'
import axios from 'axios'

// import consoleContent from './consoleContent'
import { Button, Input} from "reactstrap";

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
                <h1 style={{color:'white'}}>{this.state.currentConsole.title}</h1>
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

















// import React, { Component } from 'react'
// import axios from 'axios'
// import consoleContent from './consoleContent'
// import { Link } from 'react-router-dom'
// export class FullConsole extends Component {
//     state = {
//         consolePosts: [],

//     }
//     componentDidMount() {
//         axios.get("https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles.json")
//             .then(response => {
//                 this.setState({ consolePosts: response.data })
//                 // console.log(response)
//             });
//     }
//     // // only deletes it locally on refrish it comes back
//     //     consoleSlectedHandler = (key) => {
//     //         this.setState({consolePosts: this.state.consolePosts.filter(consolePost => consolePost.id !== key )})

//     //     }

//     render() {
//         //consle card content on the list page 
//         let consolePosts = this.state.consolePosts.map((consolePost, id) => {
//             return <Console
//                 key={id}
//                 title={consolePost.title}
//                 image1={consolePost.img1}
//                 image2={consolePost.img2}
//                 image3={consolePost.img3}
//                 image4={consolePost.img4}
//                 platform={consolePost.platform}
//                 emu={consolePost.emu}
//                 system={consolePost.system}
//                 video1={consolePost.video1}
//                 video2={consolePost.video2}
//                 info={consolePost.info}
//                 about={consolePost.about}
//                 price={consolePost.price}
//                 buy={consolePost.buy}
//             />
//         })
//         return (
//             <div>

//                 {consolePosts}
//             </div>
//         )
//     }
// }


// export default FullConsole
