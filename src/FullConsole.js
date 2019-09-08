import React, { Component } from 'react'
// import consoleContent from './consoleContent'
import { Button, Input} from "reactstrap";

export class FullConsole extends Component {
    render() {
        return (
            <div>
                <h1>full console</h1>
                 <div className="consoleCard">
                 <div className="flex-container">

                     <div class="col-md-8">
                         <div class="card-body">
                             <h5 class="card-title">{this.props.title}</h5>
                             <img src={this.props.img1} alt="avatar" className="card_img" width="30%" height="100%" />
                             <img src={this.props.img2} alt="avatar" className="card_img" width="30%" height="100%" />
                             <img src={this.props.img3} alt="avatar" className="card_img" width="30%" height="100%" />
                             <img src={this.props.img3} alt="avatar" className="card_img" width="30%" height="100%" />
                             <h5 class="card-title">{this.props.platform} platform</h5>
                             <h5 class="card-title">{this.props.emu} emu</h5>
                             <h5 class="card-title">{this.props.system}systm</h5>
                             <h5 class="card-title">{this.props.video1}</h5>
                             <h5 class="card-title">{this.props.video2}</h5>
                             <h5 class="card-title">{this.props.info}info</h5>
                             <h5 class="card-title">{this.props.about}about</h5>
                             <h5 class="card-title">{this.props.price}price</h5>
                             <h5 class="card-title">{this.props.buy}buy</h5>


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
