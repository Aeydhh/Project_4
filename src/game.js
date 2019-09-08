import React from 'react'
import './Console.css'


const Game = (props) => (
    <div onClick={props.clicked} className="consoleCard">
    <div className="flex-container">

  
   <img src={props.image} alt="avatar" className="card_img" width="30%" height="100%" />
   <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
        <p class="card-text"><small class="text-muted">game.js and gameList.js</small></p>
      </div>
    </div>
    </div>

</div>

) 


export default Game