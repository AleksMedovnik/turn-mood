import Messages from "./Messages/Messages";
import classes from './Chat.module.scss'
import { useEffect } from 'react';
import axios from 'axios';


const Chat = props => {

    useEffect(() => {
        if (props.chat.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(response => {
                    props.getChat(response.data);
                })
        }
    }, [])

    const messages = props.chat.map(message => {
        return (
            <li key={message.id}>
                <Messages
                    name={message.name}
                    message={message.body} />
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