import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    type='button'
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node,
  isGoogleSignIn: PropTypes.bool,
};

CustomButton.defaultProps = {
  children: '',
  isGoogleSignIn: false,
};

export default CustomButton;
