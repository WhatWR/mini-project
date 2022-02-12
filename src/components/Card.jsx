import React from 'react'
import AlertLight from './AlertLight'
import Toilet from '../images/toilet.png';


const Card = (props) => {
    return (
        <div>
            <div className="card">
                <img className='toilet-img' src={Toilet} alt="toilet" />
                <h1>Estimate Time: {props.averageTime}</h1>
                <h1>In toilet : {props.lastTime}</h1>
            </div>
        </div>
    )
}

export default Card