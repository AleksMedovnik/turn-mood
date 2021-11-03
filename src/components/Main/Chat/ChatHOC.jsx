import { connect } from "react-redux";
import Chat from "./Chat";
import { getChat } from '../../../store/reducers/chatReducer'


const mapStateToProps = state => {
    return {
        chat: state.chat.chat,
    }
};

export default connect(mapStateToProps, { getChat })(Chat);