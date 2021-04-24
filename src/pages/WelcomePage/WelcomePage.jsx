import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm/LoginForm.component';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import './WelcomePage.styles.scss';

const WelcomePage = ({ setSignedInState }) => (
  <div className='sectionOne'>
    <LoginForm setSignedInState={setSignedInState} />
    <SignUpForm setSignedInState={setSignedInState} />
  </div>
);

WelcomePage.propTypes = {
  setSignedInState: PropTypes.func.isRequired,
};
export default WelcomePage;
