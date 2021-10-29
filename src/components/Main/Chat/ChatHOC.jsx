import { connect } from "react-redux";
import Chat from "./Chat";


const mapStateToProps = state => {
    return {
        chat: state.chat.chat,
    }
};

export default connect(mapStateToProps, { })(Chat);