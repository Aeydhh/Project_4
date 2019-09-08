import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button, Jumbotron, Form, FormGroup, Label, Input, Row } from "reactstrap";
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
            hints: '',
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
        axios.post('https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles.json', this.state)
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
                            <Label for="title">Game Name</Label>
                            <Input
                                type="text"
                                name="title"
                                placeholder=" name"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleUrl">Game image </Label>
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
                            <Label for="platform"> platform</Label>
                            <Input
                                type="text"
                                name="platform"
                                placeholder="PS4 / XBOXone"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="aboutgame">About Game </Label> <br />
                            <Input
                                type="textarea"
                                name="aboutgame"
                                placeholder="what makes it special"
                                onChange={this.changeHandler} />
                        </FormGroup>

                        <FormGroup>
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
                        </FormGroup>


                        <FormGroup>
                            <Label for="genre">Genre </Label>
                            <Input
                                type="text"
                                name="genre"
                                placeholder="Action / Advinture / Sport"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="hints">Game hints</Label> <br />
                            <Input
                                type="textarea"
                                name="hints"
                                placeholder="hints to solve game puzzles"
                                onChange={this.changeHandler} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="try"> Try Game</Label>
                            <Input
                                type="text"
                                name="try"
                                placeholder="game link"
                                onChange={this.changeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="buy">Buy Game </Label>
                            <Input
                                type="text"
                                name="buy"
                                placeholder="buy link"
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


export default withRouter(NewGame);













// import React, { Component } from 'react'
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';
// import { Button, Jumbotron,Form, FormGroup, Label, Input, Row} from "reactstrap";
// import './NewConsole.css';

// class NewGame extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             eventName: '',
//             startDate: '',
//             endDate: '',
//             eventLocation: '',
//             numberOfVolunteer: 0,
//             summary: '',
//             conditions: '',
//             image: '',
//             eventCategory: '',
//             volunteerCategory: ''
//         }
//     }

//     changeHandler = (event) => {
//         this.setState({ [event.target.name]: event.target.value })
//     }

//     submitHandler = (event) => {
//         event.preventDefault()
//         console.log(this.state);
//         axios.post('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json', this.state)
//             .then(response => {
//                 console.log(response);
//                 this.props.history.push('/');
//             })
//             .catch(error => {
//                 console.log(error);
//             })
       
          
        
//     }

//     render() {

//         return (

           
//             <Jumbotron className="base-container" > 
//                                     <h1 className="Addingpost">New Game </h1>

//                 <Row>
                    
//                 <Form className= "Forma" onSubmit={this.submitHandler}>
//                     <FormGroup>
//                     <Label for="EventTitle">Event Title</Label>
//                     <Input
//                     type="text"
//                     name="eventName"
//                     placeholder="Event Title"
//                     onChange={this.changeHandler}
//                     />
//                 </FormGroup>
     
//                 <FormGroup>
//                     <Label for="exampleUrl">Event Image Url</Label>
//                     <Input
//                     type="url"
//                     name="image"
//                     placeholder="Event Image url"
//                     onChange={this.changeHandler}
//                     />
//                 </FormGroup>

//                 <FormGroup>
//                     <Label for="startDate">Event Start Date</Label>
//                     <Input
//                     type="date"
//                     name="startDate"
//                     placeholder="Event Start Date"
//                     onChange={this.changeHandler}
//                     />
//                 </FormGroup>

//                 <FormGroup>
//                     <Label for="endDate">Event End Date</Label>
//                     <Input
//                     type="date"
//                     name="endDate"
//                     placeholder="Event End Date"
//                     onChange={this.changeHandler}
//                     />
//                 </FormGroup>
    
//                 <FormGroup>
//                     <Label for="eventCategory">Event Category</Label>
//                     <Input type="select" name="eventCategory" onChange={this.changeHandler}>
//                     <option  selected="true"  disabled="disabled">Choose Event Category</option>
//                     <option value='Community'>Community</option>
//                     <option value='Environmental'>Environmental</option>
//                     <option value='Medical'>Medical</option>
//                     <option value='Education'>Education</option>
//                     <option value='Education'>Technology</option>
//                     <option value='SpecialNeeds'>Special Needs</option>
//                     <option value='Childern'>Childern</option>
//                     <option value='Senior'>Senior</option>
//                     <option value='Animal'>Animal</option>
//                     <option value='Others'>Others</option>

//                     </Input>
//                 </FormGroup>

//                 <FormGroup>
//                     <Label for="eventLocation">Event Location</Label>
//                     <Input type="select" name="eventLocation" onChange={this.changeHandler}>
//                     <option selected="true" disabled="disabled">Choose Event Location</option>
//                     <option value='Jeddah'>Jeddah</option>
//                     <option value='Makkah'>Makkah</option>
//                     <option value='Riyadh'>Riyadh</option>
//                     <option value='AlHasa'>AlHasa</option>
//                     <option value='Abha'>Abha</option>
//                     </Input>
//                 </FormGroup>

                
//                 <FormGroup>
//                     <Label for="summary">Event Description</Label> <br/>
//                     <Input 
//                     type="textarea" 
//                     name="summary" 
//                     placeholder="Write an Description About the Event"
//                     onChange={this.changeHandler}  />
//                 </FormGroup>


//                 <Button color="try" type="submit"> Submit </Button>
//                 </Form>
 
//                 </Row>
//             </Jumbotron>
 
//       );
//     }
// }


// export default withRouter(NewGame);
