import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm.component';

const WelcomePage = (props) => (
    <LoginForm setSignedInState={props.setSignedInState}/>
);

export default WelcomePage;