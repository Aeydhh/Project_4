import React, { Component } from 'react'
import axios from 'axios';
import './updateConsole.css'


class updateGame extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImg1 = this.onChangeImg1.bind(this);
        this.onChangeImg2 = this.onChangeImg2.bind(this);
        this.onChangeImg3 = this.onChangeImg3.bind(this);
        this.onChangeImg4 = this.onChangeImg4.bind(this);
        this.onChangePlatform = this.onChangePlatform.bind(this);
        this.onChangeVid1 = this.onChangeVid1.bind(this);
        this.onChangeVid2 = this.onChangeVid2.bind(this);
        this.onChangeTry = this.onChangeTry.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeHitnt = this.onChangeHitnt.bind(this);
        this.onChangeaboutGame = this.onChangeaboutGame.bind(this);
        this.onChangeBuy = this.onChangeBuy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            title: "",
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            platform: "",
            aboutgame: "",
            video1: "",
            video2: "",
            genre: "",
            hitnt: '',
            try: '',
            buy: "",

        }

    }
    componentWillMount() {
   console.log('i am params',this.props.match.params.id);
   
        axios.get(`https://cors-anywhere.herokuapp.com/https://shutdown-2modles-api.herokuapp.com/games/${this.props.match.params.id}`
        )
            .then(response => {
                this.setState({
                    title: response.title,
                    img1: response.data.img1,
                    platform: response.data.platform,
                    img2: response.data.img2,
                    img3: response.data.img3,
                    img4: response.data.img4,
                    try: response.data.try,
                    buy: response.data.buy,
                    video1: response.data.video1,
                    video2: response.data.video2,
                    genre: response.data.genre,
                    aboutgame: response.data.aboutgame,
                    hitnt: response.data.hitnt,



                })
                console.log(this.state.title)
            })
            .catch(function (error) {
                console.log(error)
                console.log("hi",this.state.title)

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
  
    onChangePlatform(e) {
        this.setState({
            platform: e.target.value
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

    onChangeHitnt(e) {
        this.setState({
            hitnt: e.target.value
        });
    }

    onChangeTry(e) {
        this.setState({
            try: e.target.value
        });
    }
    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onChangeaboutGame(e) {
        this.setState({
            aboutgame: e.target.value
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
            platform: this.state.platform,
            try: this.state.try,
            aboutgame: this.state.aboutgame,
            img2: this.state.img2,
            img3: this.state.img3,
            img4: this.state.img4,
            genre: this.state.genre,
            hitnt: this.state.hitnt,
            video1: this.state.video1,
            video2: this.state.video2,
            buy: this.state.buy,
        };
        axios.patch(`https://shutdown-2modles-api.herokuapp.com/games/${this.props.match.params.id}`, obj,  { headers: { 'origin': 'x-requested-with' } })
            .then(res => console.log(res.data));
        this.props.history.push('/games_list');
    }

    submitHandler = (consolee) => {
        consolee.preventDefault()
        console.log(this.state);
        axios.post('https://shutdown-2modles-api.herokuapp.com/games', { title: this.state.title }, { headers: { 'origin': 'x-requested-with' } })
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
                <h3>Edit Game </h3>
                <div style={{ marginTop: 20 }}>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label> Game Name: </label>
                            <input type="text" className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle} />
                        </div>

                        <div className="form-group">
                            <label> Image 1</label>
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
                            <label> Image 3</label>
                            <input type="text" className="form-control"
                                value={this.state.img3}
                                onChange={this.onChangeImg3} />
                        </div>

                        <div className="form-group">
                            <label> Image 4</label>
                            <input type="text" className="form-control"
                                value={this.state.img4}
                                onChange={this.onChangeImg4} />
                        </div>

                        <div className="form-group">
                            <label> platform </label>
                            <input type="text" className="form-control"
                                value={this.state.platform}
                                onChange={this.onChangePlatform} />
                        </div>

                        <div className="form-group">
                            <label> About Game </label>
                            <input type="text" className="form-control"
                                value={this.state.aboutgame}
                                onChange={this.onChangeaboutGame} />
                        </div>

                        <div className="form-group">
                            <label> Video 1 </label>
                            <input type="text" className="form-control"
                                value={this.state.video1}
                                onChange={this.onChangevideo1} />
                        </div>

                        <div className="form-group">
                            <label> Video 2 </label>
                            <input type="text" className="form-control"
                                value={this.state.video2}
                                onChange={this.onChangevideo2} />
                        </div>


                        <div className="form-group">
                            <label> Genre </label>
                            <input type="text" className="form-control"
                                value={this.state.genre}
                                onChange={this.onChangeGenre} />
                        </div>

                        <div className="form-group">
                            <label> Hints </label>
                            <input type="text" className="form-control"
                                value={this.state.hitnt}
                                onChange={this.onChangeHitnt} />
                        </div>

                        <div className="form-group">
                            <label> Try </label>
                            <input type="text" className="form-control"
                                value={this.state.try}
                                onChange={this.onChangeTry} />
                        </div>

                        <div className="form-group">
                            <label> Buy </label>
                            <input type="text" className="form-control"
                                value={this.state.buy}
                                onChange={this.onChangebuy} />
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

export default updateGame
