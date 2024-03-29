import React, { Component } from 'react'
import axios from 'axios';
import './updateConsole.css'


class updateConsole extends Component {


    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImg1 = this.onChangeImg1.bind(this);
        this.onChangeImg1 = this.onChangeImg2.bind(this);
        this.onChangeImg1 = this.onChangeImg3.bind(this);
        this.onChangeImg1 = this.onChangeImg4.bind(this);
        this.onChangeEmu = this.onChangeEmu.bind(this);
        this.onChangeVid1 = this.onChangeVid1.bind(this);
        this.onChangeVid2 = this.onChangeVid2.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangeBuy = this.onChangeBuy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


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
    componentWillMount() {
        console.log('i am params', this.props.match.params.id);

        axios.get(`https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}`
        )
            .then(response => {
                this.setState({
                    title: response.data.title,
                    img1: response.data.img1,
                    img1: response.data.img2,
                    img1: response.data.img3,
                    img1: response.data.img4,
                    emu: response.data.emu,
                    system: response.data.system,
                    video1: response.data.video1,
                    video2: response.data.video2,
                    price: response.data.price,
                    about: response.data.about,
                    buy: response.data.buy,

                })
                console.log(this.state.title)
            })
            .catch(function (error) {
                console.log(error)
                console.log("hi", this.state.title)

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

    onChangeImg2(e) {
        this.setState({
            img2: e.target.value
        });
    }

    onChangeImg3(e) {
        this.setState({
            img3: e.target.value
        });
    }

    onChangeImg4(e) {
        this.setState({
            img4: e.target.value
        });
    }



    onChangeEmu(e) {
        this.setState({
            emu: e.target.value
        });
    }

    onChangeVid1(e) {
        this.setState({
            video1: e.target.value
        });
    }

    onChangeVid2(e) {
        this.setState({
            video2: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeSystem(e) {
        this.setState({
            system: e.target.value
        });
    }

    onChangeInfo(e) {
        this.setState({
            info: e.target.value
        })
    }
    onChangeAbout(e) {
        this.setState({
            about: e.target.value
        });
    }

    onChangeBuy(e) {
        this.setState({
            buy: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            img1: this.state.img1,
            emu: this.state.emu,
            price: this.state.price,
            about: this.state.about,
            img2: this.state.img2,
            img3: this.state.img3,
            img4: this.state.img4,
            system: this.state.system,
            video1: this.state.video1,
            video2: this.state.video2,
            info: this.state.info,
            buy: this.state.buy,
        };
        axios.patch(`https://shutdown-2modles-api.herokuapp.com/consoles/${this.props.match.params.id}`, obj, { headers: { 'origin': 'x-requested-with' } })
            .then(res => console.log(res.data));
            this.props.history.push('/consoles_list');
        }

    submitHandler = (consolee) => {
        consolee.preventDefault()
        console.log(this.state);
        axios.post('https://shutdown-2modles-api.herokuapp.com/consoles', { title: this.state.title }, { headers: { 'origin': 'x-requested-with' } })
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
            <div className="updatepage">
                <h3>Edit Console </h3>
                <div style={{ marginTop: 20 }}>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label> Console Name: </label>
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
                            <label> Image 2 </label>
                            <input type="text" className="form-control"
                                value={this.state.img2}
                                onChange={this.onChangeImg2} />
                        </div>

                        <div className="form-group">
                            <label> Image 3 </label>
                            <input type="text" className="form-control"
                                value={this.state.img3}
                                onChange={this.onChangeImg3} />
                        </div>

                        <div className="form-group">
                            <label> Image 4 </label>
                            <input type="text" className="form-control"
                                value={this.state.img4}
                                onChange={this.onChangeImg4} />
                        </div>

                        <div className="form-group">
                            <label> Emulator </label>
                            <input type="text" className="form-control"
                                value={this.state.emu}
                                onChange={this.onChangeEmu} />
                        </div>

                        <div className="form-group">
                            <label> System </label>
                            <input type="text" className="form-control"
                                value={this.state.system}
                                onChange={this.onChangeSystem} />
                        </div>

                        <div className="form-group">
                            <label> Video 1 </label>
                            <input type="text" className="form-control"
                                value={this.state.video1}
                                onChange={this.onChangeVid1} />
                        </div>

                        <div className="form-group">
                            <label> Video 2: </label>
                            <input type="text" className="form-control"
                                value={this.state.video2}
                                onChange={this.onChangeVid2} />
                        </div>

                        <div className="form-group">
                            <label> About </label>
                            <input type="text" className="form-control"
                                value={this.state.about}
                                onChange={this.onChangeAbout} />
                        </div>

                        <div className="form-group">
                            <label> Price </label>
                            <input type="text" className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice} />
                        </div>

                        <div className="form-group">
                            <label> Buy </label>
                            <input type="text" className="form-control"
                                value={this.state.buy}
                                onChange={this.onChangeBuy} />
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











