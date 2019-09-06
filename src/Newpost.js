import React, { Component } from 'react'
import axios from 'axios';
import { Select } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import './Newpost.css';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventName: '',
            startDate: '',
            endDate: '',
            eventLocation: '',
            numberOfVolunteer: 0,
            summary: '',
            conditions: '',
            image: '',
            eventCategory: '',
            volunteerCategory: ''
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        axios.post('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json', this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
       
          
        
    }

    render() {

        const { eventName, startDate, endDate, eventLocation, volunteerNum, summary, conditions, image, eventCategory, volunteerCategory } = this.state;


        return (
            <form className="base-container" onSubmit={this.submitHandler}>
                  <div className= "header">New Event</div>
               
                    <div>
                        <input placeholder='Enter The Event Name' type='text' name='eventName' onChange={this.changeHandler} eventName />
                    </div>
                    <div>
                        <Select onChange={this.changeHandler} name='conditions'>
                            <option selected="true" disabled="disabled">Choose the volunteers gender</option>
                            <option value='Male'>Male</option>
                            <option value='Famale'>Famale</option>
                            <option value='F/M'>F/M</option>
                        </Select>
                    </div>
                    <div>
                        <input placeholder='Enter The Event Start Date' type='date' name='startDate' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input placeholder='Enter The Event End Date' type='date' name='endDate' onChange={this.changeHandler} />
                    </div>

                    <div>
                        <input placeholder='How many Volunteer/s required' type='number' name='numberOfVolunteer' onChange={this.changeHandler} />
                    </div>

                    <div>
                        <Select onChange={this.changeHandler} name='eventLocation'>
                            <option selected="true" disabled="disabled">Choose Your city</option>
                            <option value='Riyadh'>Riyadh</option>
                            <option value='Jeddah'>Jeddah</option>
                            <option value='Ahsa'>Ahsa</option>
                            <option value='Abha'>Abha</option>
                        </Select>
                    </div>
                    <div>
                        <input placeholder='Enter The Event Image url' type='text' name='image' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input placeholder='Enter The Event Category' type='text' name='eventCategory' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <Select onChange={this.changeHandler} name='volunteerCategory'>
                            <option selected="true" disabled="disabled">Choose the volunteers category</option>
                            <option value='Children'>Children</option>
                            <option value='Teenagers'>Teenagers</option>
                            <option value='Adults'>Adults</option>
                        </Select>               
                    </div>
                    <div class="input-field col s10">
                        <textarea id="textarea2" class="materialize-textarea" data-length="120" placeholder='Enter a description about the event' type='text' name='summary' onChange={this.changeHandler} >

                        </textarea>
            
                        {/* <textarea placeholder='Enter a description about the event' type='text' name='summary' onChange={this.changeHandler} /> */}
                    </div>

                    <button type="submit" class="btn btn-info"> SUBMIT</button>
              
            </form>
        )
    }
}

export default withRouter(PostForm);

