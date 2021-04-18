import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm.component';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm.component';
import './WelcomePage.styles.scss';

const WelcomePage = (props) => (
        <div className="sectionOne">
            <LoginForm setSignedInState={props.setSignedInState}/>
            <SignUpForm setSignedInState={props.setSignedInState}/>
        </div>
);

export default WelcomePage;