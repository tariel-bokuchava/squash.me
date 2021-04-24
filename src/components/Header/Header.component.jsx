import React from 'react';
import PropTypes from 'prop-types';
import './Header.styles.scss';
import { Link } from 'react-router-dom';

// import { auth } from '../../includes/Firebase/firebase-auth-utils';
import SignOutButton from '../SignOutButton/SignOutButton.component';

// import { ReactComponent as SquashBall } from '../../assets/squash_ball.svg';
const debug = require('debug');

const Header = ({ currentUser }) => {
  debug('Header');
  debug(currentUser);
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>Home</Link>
      </div>
      <div className='header-menu'>
        <Link className='header-menu-item' to='/matches'>
          Matches
        </Link>
        <Link className='header-menu-item' to='/players'>
          Players
        </Link>
        <SignOutButton currentUser={currentUser} />
      </div>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Header;
