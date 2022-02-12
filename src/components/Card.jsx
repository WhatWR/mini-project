import React from 'react'
import Toilet from '../images/toilet.png'
import Poo from '../images/diarrhea.png'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <h1 className="card-title">Room : {props.roomNumber}</h1>
                {props.status ? (<img className="toilet-img" src={Poo} alt="toilet" />) : (<img className="toilet-img" src={Toilet} alt="toilet" />)}


                <div className="card-body">
                    {props.status ? (
                        <>
                            <h1 className='card-content'>Start time : {props.startTime}</h1>
                            <h1 className='card-content'>Estimate Time: {props.averageTime}</h1>
                            <h1 className='card-content'>In toilet : {props.diffTime}</h1>
                        </>
                    ) : (
                        <h1 class='card-content'>Estimate Time: {props.averageTime}</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
