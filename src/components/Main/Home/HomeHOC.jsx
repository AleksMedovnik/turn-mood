import { connect } from "react-redux";
import Home from "./Home";
import { getUsers, follow } from '../../../store/reducers/homeReducer'

const mapStateToProps = state => {
    return {
        users: state.home.users,
    }
};

export default connect(mapStateToProps, { getUsers, follow })(Home);