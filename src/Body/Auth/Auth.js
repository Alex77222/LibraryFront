import React from "react";
import {MDBBtn, MDBContainer, MDBInput} from 'mdb-react-ui-kit';

const Auth = (props) => {

    const onUsernameChange = (e) => {
        props.updateUserNameText(e.target.value)
    }
    const onPasswordChange = (e) => {
        props.updatePassText(e.target.value)
    }
    const submitForm = () => {
        props.resetAuthErrors();
        props.login(props.userNameText, props.passText);
    }
    
    return (<MDBContainer className=" d-flex justify-content-center mt-5">
        <div>
            <div className="form-outline mb-4">
                <MDBInput className='mb-4 mt-5'
                          type='username'
                          id='username'
                          label="Login"
                          onChange={onUsernameChange}
                          value={props.userNameText}
                          autoFocus
                />
            </div>

            <div className="form-outline mb-4">
                <MDBInput className='mb-4 d-flex justify-content-center'
                          type='password'
                          id='password'
                          label="Password"
                          onChange={onPasswordChange}
                          value={props.passText}
                />
            </div>
            <MDBBtn type="submit" className="btn btn-primary btn-block" onClick={submitForm} >Sign in</MDBBtn>
        </div>
    </MDBContainer>);
}
export default Auth;