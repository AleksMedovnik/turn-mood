import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = state => {
    return {
        users: state.home.users,
    }
};

export default connect(mapStateToProps, { })(Home);