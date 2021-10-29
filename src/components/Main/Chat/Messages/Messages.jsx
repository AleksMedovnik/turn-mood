import classes from '../Chat.module.scss'
import ava from '../../../../images/ava.png'

const Messages = props => {
    return (
        <div className={`hover-box ${classes.messages}`}>
            <div>
                <img src={ava} alt="" className={classes.messages__image} />
            </div>
            <div>
                <span className={classes.messages__name}>{props.name}</span>
                <br />
                <span className={classes.messages__message}>{props.message}</span>
            </div>
        </div>
    )
}
export default Messages;