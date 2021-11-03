import { connect } from "react-redux";
import Home from "./Home";
import { getUsers } from '../../../store/reducers/homeReducer'

const mapStateToProps = state => {
    return {
        users: state.home.users,
    }
};

export default connect(mapStateToProps, { getUsers })(Home);