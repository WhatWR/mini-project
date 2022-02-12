import RedLight from '../images/cancel.png'
import GreenLight from '../images/check.png'


const AlertLight = (props) => {
    return (
        <div>
            {props.status ? (<img className="green-light" src={GreenLight} alt="Green Light" />) : (<img className="green-light" src={RedLight} alt="Red Light" />)}
        </div>
    )
}

export default AlertLight