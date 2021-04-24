import React from 'react';
import PropTypes from 'prop-types';
import './SignOutButton.styles.scss';

import { Link } from 'react-router-dom';
import { auth } from '../../includes/Firebase/firebase-auth-utils';
import UserPhoto from '../UserPhoto/UserPhoto.component';

const SignOutButton = ({ currentUser }) => {
  console.log(currentUser);
  return currentUser != null ? (
    <div>
      <UserPhoto
        userName={currentUser.displayName}
        photoURL={currentUser.photoURL}
      />
      <Link className='header-menu-item' to='/' onClick={() => auth.signOut()}>
        Sign Out
      </Link>
    </div>
  ) : (
    <Link className='header-menu-item' to='/signin'>
      SignIn
    </Link>
  );
};

SignOutButton.propTypes = {
  currentUser: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};

SignOutButton.defaultProps = {
  currentUser: null,
};

export default SignOutButton;
