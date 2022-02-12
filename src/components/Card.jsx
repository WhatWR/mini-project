import React from 'react'
import AlertLight from './AlertLight'
import Toilet from '../images/toilet.png';


const Card = (props) => {
    return (<div>
        <div className="card">
            <img src={Toilet} alt="toilet" />
            {/* {props.status ? } */}
            <h1>start time : {props.startTime}</h1>
            <h1>esimate Time: {props.averageTime}</h1>
            <h1>In toilet : {props.diffTime}</h1>
        </div>
        </div>
    )
}

export default Card