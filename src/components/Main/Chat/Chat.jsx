import Messages from "./Messages/Messages";
import classes from './Chat.module.scss'


const Chat = props => {
    const messages = props.chat.map(message => {
        return (
            <li>
                <Messages key={message.id}
                    name={message.name}
                    message={message.message} />
            </li>
        )
    })

    return (
        <ul className={`item ${classes.chat}`}>
            {messages}
        </ul>
    )
}
export default Chat;