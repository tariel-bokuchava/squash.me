import React from 'react';
import './SignUpForm.styles.scss';

import CustomButton from '../CustomButton/CustomButton.component';
import TextInput from '../UIElements/TextInput/TextInput.component';
import { PasswordInput } from '../UIElements/PasswordInput/PasswordInput.component';

import { auth } from '../../includes/Firebase/firebase-auth-utils';

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
        console.log(this.state.userName);
        console.log(userCredential);
        userCredential.user.updateProfile({
          displayName: this.state.userName,
          photoURL: '',
        });
      });
  };

  render() {
    return (
      <div>
        <div className='signup-form' style={{ width: '800px' }}>
          <p className='header-text'>I don&apos;t have an account yet:</p>
          <TextInput
            id='userName'
            defaultText='UserName'
            valueText={this.state.userName}
            handleChange={this.handleTextInput}
          />
          <TextInput
            id='email'
            defaultText='Email'
            valueText={this.state.email}
            handleChange={this.handleTextInput}
          />
          <PasswordInput
            id='newPassword'
            defaultText='Password'
            valueText={this.state.newPassword}
            handleChange={this.handleTextInput}
          />
          <PasswordInput
            id='repeatPassword'
            defaultText='Repeat Password'
            valueText={this.state.repeatPassword}
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
