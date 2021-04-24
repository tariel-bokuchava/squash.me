import React from 'react';
import './SignUpForm.styles.scss';

import CustomButton from '../CustomButton/CustomButton.component';
import TextInput from '../UIElements/TextInput/TextInput.component';
import PasswordInput from '../UIElements/PasswordInput/PasswordInput.component';

import { auth } from '../../includes/Firebase/firebase-auth-utils';

const debug = require('debug');

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      newPassword: '',
      repeatPassword: '',
    };
  }

  handleTextInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  checkSignInData = ({ password, repeatPassword }) =>
    password !== repeatPassword ? alert('Passwords do not match!') : 1;

  signUpWithEmail = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        debug(this.state.userName);
        debug(userCredential);
        userCredential.user.updateProfile({
          displayName: this.state.userName,
          photoURL: '',
        });
      });
  };

  render() {
    const { userName, email, newPassword, repeatPassword } = this.state;
    return (
      <div>
        <div className='signup-form' style={{ width: '800px' }}>
          <p className='header-text'>I don&apos;t have an account yet:</p>
          <TextInput
            id='userName'
            defaultText='UserName'
            valueText={userName}
            handleChange={this.handleTextInput}
          />
          <TextInput
            id='email'
            defaultText='Email'
            valueText={email}
            handleChange={this.handleTextInput}
          />
          <PasswordInput
            id='newPassword'
            defaultText='Password'
            valueText={newPassword}
            handleChange={this.handleTextInput}
          />
          <PasswordInput
            id='repeatPassword'
            defaultText='Repeat Password'
            valueText={repeatPassword}
            handleChange={this.handleTextInput}
          />
          <CustomButton value='Sign Up' onClick={this.signUpWithEmail}>
            Sign Up
          </CustomButton>
        </div>
      </div>
    );
  }
}
