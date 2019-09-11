import React from 'react'
import { Link } from 'react-router-dom'
import './ConsoleDevice.css'


const Game = (props) => (
  <Link to={`/fullGame/${props.id}`}>
    <div className="consoleCard">
    <div className="flex-container">

  
   <img src={props.image} alt="avatar" className="card_img" width="30%" height="100%" />
   <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      </div>
    </div>
    </div>

</div>
</Link>

) 


export default Game