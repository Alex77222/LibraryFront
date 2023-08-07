import React from "react";
import NavBar from "./NavBar";
import {logout} from "../../redux/redusers/authReducer";
import {connect} from "react-redux";

class NavBarContainer extends React.Component {
    render() {
        return <NavBar {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer.IsSuccess,
        userName:state.authReducer.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)