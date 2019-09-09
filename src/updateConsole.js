import React, { Component } from 'react'
import axios from 'axios';


export class updateConsole extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImg1 = this.onChangeImg1.bind(this);
        this.onChangeEmu = this.onChangeEmu.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
    
      
        this.state={
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
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit`
        )
            .then(response => {
                this.setState({
                    title: response.data.title,
                    img1: response.data.img1,
                    emu: response.data.emu,
                    price: response.data.price,
                    about:response.data.about
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
  
    onChangeImg1(e) {
      this.setState({
        img1: e.target.value
      });
    }
  
  
    onChangeEmu(e) {
      this.setState({
        emu: e.target.value
      });
    }
  
  
    onChangePrice(e) {
      this.setState({
        price: e.target.value
      });
    }
  
    onChangeAbout(e) {
      this.setState({
        about: e.target.value
      });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
          title:this.state.title,
          img1:this.state.img1,
          emu:this.state.emu,
          price:this.state.price,
          about:this.state.about
        };
        axios.post(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}`, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }

    // submitHandler = (consolee) => {
    //     consolee.preventDefault()
    //     console.log(this.state);
    //     axios.post('https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles', {title: this.state.title}, {headers: {'origin': 'x-requested-with'}})
    //         .then(response => {
    //             console.log(response);
    //             this.props.history.push('/');
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })

    // }


    render() {
        return (
            <div>
            <h3>Update </h3>
            <div style={{marginTop: 20}}>
     <form onSubmit={this.onSubmit}> 
        <div className="form-group">
            <label> Product </label>
             <input type="text" className="form-control"
             value={this.state.title} 
             onChange={this.onChangeTitle} /> 
        </div>
    
        <div className="form-group">
           <label> Image </label>
           <input type="text" className="form-control"
           value={this.state.img1} 
           onChange={this.onChangeImg1} /> 
        </div>
        <div className="form-group">
          <label> Emulator </label>
          <input type="text" className="form-control"
          value={this.state.emu} 
          onChange={this.onChangeEmu} /> 
        </div>
        <div className="form-group">
        <label> Price </label>
        <input type="text" className="form-control"
        value={this.state.price} 
        onChange={this.onChangePrice} /> 
      </div>
      <div className="form-group">
      <label> About </label>
      <input type="text" className="form-control"
      value={this.state.about} 
      onChange={this.onChangeAbout} /> 
    </div>
       
    <div className="form-group">
    <input type="submit" value="Update Product " className="btn btn-primary" />
    </div>
     </form>
     </div> 
        </div>
    )
}
}


export default updateConsole




















































// import React, { Component } from 'react'
// import axios from 'axios';


// export class updateConsole extends Component {
//     handleRemove = konsole => {
//         const url = `https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit`
//         ;
    
//         axios
//           .delete(url)
//           .then(res => {
//             this.setState(previousState => {
//               return {
//                 konsoles: previousState.konsoles.filter(m => m.id !== konsole.id)
//               };
//             });
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       };
    
//       // ...
//     }
    
//     class List extends React.Component {
//       removeKonsole = (e, konsole) => {
//         e.preventDefault();
    
//         if (this.props.removeClick) {
//           this.props.removeClick(konsole);
//         }
//       };
    

//     render() {
//         return (
//             <div>
//               {this.state.konsoles.map(konsole => (
//                 <ul onClick={this.editkonsole}>
//                   <li data-id={konsole.id}>{konsole.name}</li>
//                   <li data-id={konsole.id}>{konsole.type}</li>
//                   <li data-id={konsole.id}>{konsole.description}</li>
//                   <button type="submit" onClick={e => this.removekonsole(e, konsole)}>
//                     Delete
//                   </button>
//                 </ul>
//               ))}
//             </div>
//           );
//         }
//       }

// export default updateConsole








// import React, { Component } from 'react'
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';
// import { Button, Jumbotron, Form, FormGroup, Label, Input, Row } from "reactstrap";

// export class updateConsole extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: "",
//             img1: "",
//             img2: "",
//             img3: "",
//             img4: "",
//             emu: "",
//             system: "",
//             video1: "",
//             video2: "",
//             about: "",
//             price: "",
//             buy: "",
//         }
//     }

//     changeHandler = (consolee) => {
//         this.setState({ [consolee.target.name]: consolee.target.value })
//     }

//     submitHandler = (consolee) => {
//         consolee.preventDefault()
//         console.log(this.state);
//         axios.post(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit`, {title: this.state.title}, {headers: {'origin': 'x-requested-with'}})
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
//                 <h1 className="Addingpost">New Console </h1>

//                 <Row>

//                     <Form className="Forma" onSubmit={this.submitHandler}>
//                         <FormGroup>
//                             <Label for="title">Console Name</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 placeholder=" name"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="exampleUrl">Console image </Label>
//                             <Input
//                                 type="url"
//                                 name="img1"
//                                 placeholder="Console image url"
//                                 onChange={this.changeHandler}
//                             />

//                             <Input
//                                 type="url"
//                                 name="img2"
//                                 placeholder="Console image url"
//                                 onChange={this.changeHandler}
//                             />

//                             <Input
//                                 type="url"
//                                 name="img3"
//                                 placeholder="Console image url"
//                                 onChange={this.changeHandler}
//                             />
//                             <Input
//                                 type="url"
//                                 name="img4"
//                                 placeholder="Console image url"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>

//                         <FormGroup>
//                             <Label for="emu"> Compatible Emulators</Label>
//                             <Input
//                                 type="text"
//                                 name="Emulator"
//                                 placeholder="emulator"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>

//                         <FormGroup>
//                             <Label for="system">Console System</Label>
//                             <Input
//                                 type="text"
//                                 name="system"
//                                 placeholder="System"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="video1">Console Video</Label>
//                             <Input
//                                 type="text"
//                                 name="video1"
//                                 placeholder="video"
//                                 onChange={this.changeHandler}
//                             />

//                             <Label for="video2">Console Video 2</Label>
//                             <Input
//                                 type="text"
//                                 name="video2"
//                                 placeholder="Video"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>


//                         <FormGroup>
//                             <Label for="price">Console Price</Label>
//                             <Input
//                                 type="text"
//                                 name="price"
//                                 placeholder="0$"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>

//                         <FormGroup>
//                             <Label for="about">About Console</Label> <br />
//                             <Input
//                                 type="textarea"
//                                 name="about"
//                                 placeholder="Write an Description About the Console "
//                                 onChange={this.changeHandler} />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="buy">Buy Console </Label>
//                             <Input
//                                 type="text"
//                                 name="buy"
//                                 placeholder="buy console"
//                                 onChange={this.changeHandler}
//                             />
//                         </FormGroup>


//                         <Button color="primary" size="sm" type="submit"> Submit </Button>
//                     </Form>

//                 </Row>
//             </Jumbotron>

//         );
//     }
// }

// export default updateConsole






















// import React, { Component } from 'react'
// import axios from 'axios';


// export class updateConsole extends Component {
//     constructor() {
//         super();
//         this.onChangeUpdateConsole = this.onChangeUpdateConsole.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             title: "",
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
//     }

//     conponentDidMount() {
//         axios.get(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit`)
//             // axios.post(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit`, { title: this.state.title }, { headers: { 'origin': 'x-requested-with' } })

//             // axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
//             .then(res => {
//                 this.setState({ title: res.data.title });
//             })
//     }

//     onChangeUpdateConsole(e) {
//         this.setState({
//             title: e.target.value
//         })
//     }
//     onSubmit(e) {
//         e.prevenDefault();
//         const theConsole = {
//             title: this.state.title
//         }

//         axios.put(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit` + theConsole)
//             .then(res => console.log(res.data))
//     }
//     render() {
//         return (
//             <div>
//                 <h1>hello</h1>
//             </div>
//         )
//     }
// }

// export default updateConsole








// // import React, { Component } from 'react'
// // import axios from 'axios';
// // import { withRouter } from 'react-router-dom';
// // import { Button, Jumbotron, Form, FormGroup, Label, Input, Row } from "reactstrap";

// // export class updateConsole extends Component {
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             title: "",
// //             img1: "",
// //             img2: "",
// //             img3: "",
// //             img4: "",
// //             emu: "",
// //             system: "",
// //             video1: "",
// //             video2: "",
// //             about: "",
// //             price: "",
// //             buy: "",
// //         }
// //     }

// //     changeHandler = (consolee) => {
// //         this.setState({ [consolee.target.name]: consolee.target.value })
// //     }

// //     submitHandler = (consolee) => {
// //         consolee.preventDefault()
// //         console.log(this.state);
// //         axios.post(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}/edit`, {title: this.state.title}, {headers: {'origin': 'x-requested-with'}})
// //             .then(response => {
// //                 console.log(response);
// //                 this.props.history.push('/');
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             })



// //     }

// //     render() {

// //         return (


// //             <Jumbotron className="base-container" >
// //                 <h1 className="Addingpost">New Console </h1>

// //                 <Row>

// //                     <Form className="Forma" onSubmit={this.submitHandler}>
// //                         <FormGroup>
// //                             <Label for="title">Console Name</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="title"
// //                                 placeholder=" name"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>
// //                         <FormGroup>
// //                             <Label for="exampleUrl">Console image </Label>
// //                             <Input
// //                                 type="url"
// //                                 name="img1"
// //                                 placeholder="Console image url"
// //                                 onChange={this.changeHandler}
// //                             />

// //                             <Input
// //                                 type="url"
// //                                 name="img2"
// //                                 placeholder="Console image url"
// //                                 onChange={this.changeHandler}
// //                             />

// //                             <Input
// //                                 type="url"
// //                                 name="img3"
// //                                 placeholder="Console image url"
// //                                 onChange={this.changeHandler}
// //                             />
// //                             <Input
// //                                 type="url"
// //                                 name="img4"
// //                                 placeholder="Console image url"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>

// //                         <FormGroup>
// //                             <Label for="emu"> Compatible Emulators</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="Emulator"
// //                                 placeholder="emulator"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>

// //                         <FormGroup>
// //                             <Label for="system">Console System</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="system"
// //                                 placeholder="System"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>
// //                         <FormGroup>
// //                             <Label for="video1">Console Video</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="video1"
// //                                 placeholder="video"
// //                                 onChange={this.changeHandler}
// //                             />

// //                             <Label for="video2">Console Video 2</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="video2"
// //                                 placeholder="Video"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>


// //                         <FormGroup>
// //                             <Label for="price">Console Price</Label>
// //                             <Input
// //                                 type="text"
// //                                 name="price"
// //                                 placeholder="0$"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>

// //                         <FormGroup>
// //                             <Label for="about">About Console</Label> <br />
// //                             <Input
// //                                 type="textarea"
// //                                 name="about"
// //                                 placeholder="Write an Description About the Console "
// //                                 onChange={this.changeHandler} />
// //                         </FormGroup>
// //                         <FormGroup>
// //                             <Label for="buy">Buy Console </Label>
// //                             <Input
// //                                 type="text"
// //                                 name="buy"
// //                                 placeholder="buy console"
// //                                 onChange={this.changeHandler}
// //                             />
// //                         </FormGroup>


// //                         <Button color="primary" size="sm" type="submit"> Submit </Button>
// //                     </Form>

// //                 </Row>
// //             </Jumbotron>

// //         );
// //     }
// // }

// // export default updateConsole
