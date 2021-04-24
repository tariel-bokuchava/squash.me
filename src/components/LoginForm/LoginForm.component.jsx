import './LoginForm.styles.scss';

import React, { Component } from 'react';
import PasswordInput from '../UIElements/PasswordInput/PasswordInput.component';
import TextInput from '../UIElements/TextInput/TextInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import signInWithGoogle, {
  auth,
} from '../../includes/Firebase/firebase-auth-utils';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleTextInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  checkSignInData = () => {};

  signInWithEmailAndPassword = () => {
    auth.signInWithEmailAndPassword(this.state.username, this.state.password);
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div className='login-form' style={{ width: '800px' }}>
        <p className='header-text'>I already have an account:</p>
        <TextInput
          id='username'
          defaultText='Email or UserName'
          valueText={userName}
          handleChange={this.handleTextInput}
        />
        <PasswordInput
          id='password'
          defaultText='Password'
          valueText={password}
          handleChange={this.handleTextInput}
        />
        <CustomButton value='Sign in' onClick={this.signInWithEmailAndPassword}>
          Sign In
        </CustomButton>
        <CustomButton
          value='Sign in with Google'
          isGoogleSignIn
          onClick={signInWithGoogle}
        >
          {' '}
          Sign In with google
        </CustomButton>
      </div>
    );
  }
}
