import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button, Form, Label, Input } from "reactstrap";
import './NewGame.css';

class NewGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            platform: '',
            aboutgame: '',
            video1: '',
            video2: '',
            genre: '',
            hitnt: '',
            try: '',
            buy: '',

        }
    }

    changeHandler = (gamee) => {
        this.setState({ [gamee.target.name]: gamee.target.value })
    }

    submitHandler = (gamee) => {
        gamee.preventDefault()
        console.log(this.state);
        axios.post('https://shutdown-2modles-api.herokuapp.com/games.json', this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/games_list');
            })
            .catch(error => {
                console.log(error);
            })



    }

    render() {

        return (


            <div className="updatepage" >
                <h1 className="Addingpost">New Game </h1>

                <div>

                    <Form className="Forma" onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <Label for="title">Game Name</Label>
                            <Input
                                type="text"
                                name="title"
                                placeholder=" name"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <Label for="exampleUrl">Game image </Label>
                            <Input
                                type="url"
                                name="img1"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />
                            <Label for="exampleUrl">Image 2 </Label>
                            <Input
                                type="url"
                                name="img2"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />
                            <Label for="exampleUrl">Image 3 </Label>
                            <Input
                                type="url"
                                name="img3"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />
                            <Label for="exampleUrl">Image 4 </Label>
                            <Input
                                type="url"
                                name="img4"
                                placeholder="Console image url"
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <Label for="platform"> Platform</Label>
                            <Input
                                type="text"
                                name="platform"
                                placeholder="PS4 / XBOXone"
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <Label for="aboutgame">About Game </Label> <br />
                            <Input
                                type="textarea"
                                name="aboutgame"
                                placeholder="what makes it special"
                                onChange={this.changeHandler} />
                        </div>

                        <div className="form-group">
                            <Label for="video1"> Video 1</Label>
                            <Input
                                type="text"
                                name="video1"
                                placeholder="video"
                                onChange={this.changeHandler}
                            />

                            <Label for="video2"> Video 2</Label>
                            <Input
                                type="text"
                                name="video2"
                                placeholder="Video"
                                onChange={this.changeHandler}
                            />
                        </div>


                        <div className="form-group">
                            <Label for="genre">Genre </Label>
                            <Input
                                type="text"
                                name="genre"
                                placeholder="Action / Advinture / Sport"
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <Label for="hitnt">Game hints</Label> <br />
                            <Input
                                type="textarea"
                                name="hitnt"
                                placeholder="hints to solve game puzzles"
                                onChange={this.changeHandler} />

                        </div>

                        <div className="form-group">
                            <Label for="try"> Try Game</Label>
                            <Input
                                type="text"
                                name="try"
                                placeholder="game link"
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <Label for="buy">Buy Game </Label>
                            <Input
                                type="text"
                                name="buy"
                                placeholder="buy link"
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


export default withRouter(NewGame);






