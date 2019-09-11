import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button, Form,Label, Input } from "reactstrap";
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
        axios.post('https://shutdown-2modles-api.herokuapp.com/consoles.json', this.state)
        // axios.post('https://shutdown-2modles-api.herokuapp.com/consoles', {title: this.state.title}, {headers: {'origin': 'x-requested-with'}})
            .then(response => {
                console.log(response);
                this.props.history.push('/consoles_list');
            })
            .catch(error => {
                console.log(error);
            })



    }

    render() {

        return (


            <div className="updatepage" >
                <h1 className="Addingpost">New Console </h1>

                <div>

                    <Form className="Forma" onSubmit={this.submitHandler}>
                       <div className="form-group">
                            <Label for="title">Console Name</Label>
                            <Input
                                type="text"
                                name="title"
                                placeholder=" name"
                                onChange={this.changeHandler}
                            />
                        </div>
                       <div className="form-group">
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
                        </div>

                       <div className="form-group">
                            <Label for="emu"> Compatible Emulators</Label>
                            <Input
                                type="text"
                                name="Emulator"
                                placeholder="emulator"
                                onChange={this.changeHandler}
                            />
                        </div>

                       <div className="form-group">
                            <Label for="system">Console System</Label>
                            <Input
                                type="text"
                                name="system"
                                placeholder="System"
                                onChange={this.changeHandler}
                            />
                        </div>
                       <div className="form-group">
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
                        </div>




                       <div className="form-group">
                            <Label for="about">About Console</Label> <br />
                            <Input
                                type="textarea"
                                name="about"
                                placeholder="Write an Description About the Console "
                                onChange={this.changeHandler} />
                        </div>

                        <div className="form-group">
                            <Label for="price">Console Price</Label>
                            <Input
                                type="text"
                                name="price"
                                placeholder="0$"
                                onChange={this.changeHandler}
                            />
                        </div>

                       <div className="form-group">
                            <Label for="buy">Buy Console </Label>
                            <Input
                                type="text"
                                name="buy"
                                placeholder="buy console"
                                onChange={this.changeHandler}
                            />
                        </div>


                        <Button color="primary" size="sm" type="submit"> Submit </Button>
                    </Form>

                </div>
            </div>

        );
    }
}


export default withRouter(NewConsole);






