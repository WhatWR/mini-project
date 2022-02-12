import React from 'react'
import AlertLight from './AlertLight'
import Toilet from '../images/toilet.png';


const Card = () => {
    return (<div> <AlertLight />
        <div className="card">
            <img src={Toilet} alt="toilet" />
            <h1>Is Occupied : True</h1>
            <h1>esimate Time: 10min</h1>
            <h1>In toilet : 10min</h1>
        </div>
        </div>
    )
}

export default Card