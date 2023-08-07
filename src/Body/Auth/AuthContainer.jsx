import React from "react";
import Auth from "./Auth";
import {login, resetAuthErrors, updatePassText, updateUserNameText} from "../../redux/redusers/authReducer";
import {connect} from "react-redux";


class AuthContainer extends React.Component{
    render(){
        return<Auth {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        errors:state.authReducer.errors,
        userNameText: state.authReducer.userNameText,
        passText: state.authReducer.passText
    };
    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        login:(userName, password)=>dispatch(login(userName,password)),
        updateUserNameText: (userName) => dispatch(updateUserNameText(userName)),
        updatePassText: (password) => dispatch(updatePassText(password)),
        resetAuthErrors: () => dispatch(resetAuthErrors()),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);