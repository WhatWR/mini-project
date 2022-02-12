import React from 'react'
import RedLight from '../images/cancel.png'
import GreenLight from '../images/check.png'

const AlertLight = () => {
    const isEmply = false
    return (
        <div>
            {isEmply ? (
                <img className="green-light" src={GreenLight} alt="Green Light" />
            ): (
                
                <img className="red-light" src={RedLight} alt="Red Light" />
            )}
            
        </div>
    )
}

export default AlertLight