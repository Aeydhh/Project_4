import React, { Component } from 'react'
import './Console.css'


const Console = (props) => (
    <div onClick={props.change} className="consoleCard">
    <div className="flex-container">

  
   <img src={props.image} className="card_img" width="30%" height="100%" />
   <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.location}.</p>
        <p class="card-text"><small class="text-muted">console.js and consoleList.js</small></p>
      </div>
    </div>
    </div>

</div>

) 


export default Console