import React, { Component } from 'react'
import './ConsoleDevice.css'
import { Link } from 'react-router-dom'


const ConsoleDevice = (props) => (
  <Link to={`/fullConsole/${props.id}`}>
    <div  className="consoleCard">
    <div className="flex-container">

  
   <img src={props.image1} className="card_img" width="30%" height="100%" />
   <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        {/* <p class="card-text">{props.location}.</p> */}
      </div>
    </div>
    </div>

</div>
</Link>

) 


export default ConsoleDevice