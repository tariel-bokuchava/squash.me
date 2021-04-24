import React from 'react';
// import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm/LoginForm.component';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import './WelcomePage.styles.scss';

const WelcomePage = () => (
  <div className='sectionOne'>
    <LoginForm />
    <SignUpForm />
  </div>
);

export default WelcomePage;
