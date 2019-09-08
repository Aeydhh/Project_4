

import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button, Jumbotron, Form, FormGroup, Label, Input, Row } from "reactstrap";
import './NewConsole.css';

class NewConsole extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            emu: "",
            system: "",
            video1: "",
            video2: "",
            about: "",
            price: "",
            buy: "",
        }
    }

    changeHandler = (consolee) => {
        this.setState({ [consolee.target.name]: consolee.target.value })
    }

    submitHandler = (consolee) => {
        consolee.preventDefault()
        console.log(this.state);
        axios.post('https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles', {title: this.state.title}, {headers: {'origin': 'x-requested-with'}})
            .then(response => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })



    }

    render() {

        return (


            <Jumbotron className="base-container" >
                <h1 className="Addingpost">New Console </h1>

                <Row>

                    <Form className="Forma" onSubmit={this.submitHandler}>
                        <FormGroup>
                            <Label for="title">Console Name</Label>
                            <Input
                                type="text"
                                name="title"
                                placeholder=" name"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleUrl">Console image </Label>
                            <Input
                                type="url"
                                name="img1"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />

                            <Input
                                type="url"
                                name="img2"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />

                            <Input
                                type="url"
                                name="img3"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />
                            <Input
                                type="url"
                                name="img4"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="emu"> Compatible Emulators</Label>
                            <Input
                                type="text"
                                name="Emulator"
                                placeholder="emulator"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="system">Console System</Label>
                            <Input
                                type="text"
                                name="system"
                                placeholder="System"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="video1">Console Video</Label>
                            <Input
                                type="text"
                                name="video1"
                                placeholder="video"
                                onChange={this.changeHandler}
                            />

                            <Label for="video2">Console Video 2</Label>
                            <Input
                                type="text"
                                name="video2"
                                placeholder="Video"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="price">Console Price</Label>
                            <Input
                                type="text"
                                name="price"
                                placeholder="0$"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="about">About Console</Label> <br />
                            <Input
                                type="textarea"
                                name="about"
                                placeholder="Write an Description About the Console "
                                onChange={this.changeHandler} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="buy">Buy Console </Label>
                            <Input
                                type="text"
                                name="buy"
                                placeholder="buy console"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>


                        <Button color="primary" size="sm" type="submit"> Submit </Button>
                    </Form>

                </Row>
            </Jumbotron>

        );
    }
}


export default withRouter(NewConsole);


// import React, { Component } from 'react'
// import axios from 'axios';
// // import { withRouter } from 'react-router-dom';
// // import { Button, Jumbotron, Form, FormGroup, Label, Input, Row } from "reactstrap";
// import { Button, Input} from "reactstrap";

// import './NewConsole.css';

// class NewConsole extends Component {
//     state = {
//         title: '',
//         img1: '',
//         img2: '',
//         img3: '',
//         img4: '',
//         emu: '',
//         system: '',
//         video1: '',
//         video2: '',
//         about: '',
//         price: '',
//         buy: '',
//     }

//     changeHandler = event => {
//         this.setState({ title: event.target.value })
//     }

//     newConsoleHandler = event => {
//         event.preventDefault()

//         let consolepost = {
//             title: this.state.title,
//             // img1: this.state.img1,
//             // img2: this.state.img2,
//             // img3: this.state.img3,
//             // img4: this.state.img4,
//             // emu: this.state.emu,
//             // system: this.state.system,
//             // video1: this.state.video1,
//             // video2: this.state.video2,
//             // about: this.state.about,
//             // price: this.state.price,
//             // buy: this.state.buy,

//         }
//         axios.post('https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles.json', { consolepost })
//             .then(response => {
//                 console.log(response)
//                 // this.setState({ consolepost: response.data })
//             })
//     }

//     render() {

//         return (
//             <form onSubmit={this.newConsoleHandler}>
//                 <label>
//                     Console Name:
//                     <Input type="text" name="title" onChange={this.changeHandler} />
//                 </label>
//                 <Button type="submit">Add Console</Button>
//             </form>
//         )

//     }
// }
// export default (NewConsole);






