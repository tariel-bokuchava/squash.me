import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';

import { auth } from '../../includes/Firebase/firebase-auth-utils';
import SignOutButton from '../SignOutButton/SignOutButton.component';

//import { ReactComponent as SquashBall } from '../../assets/squash_ball.svg';

const Header = (props) => {
    console.log('Header');
    console.log(props.currentUser);
    return (
    <div className='header'>
        <div className='logo-container'>
        <Link to='/'>
            Home
        </Link>
        </div>
        <div className='header-menu'>
            <Link className='header-menu-item' to='/matches'>Matches</Link>
            <Link className='header-menu-item' to='/players'>Players</Link>
            <SignOutButton currentUser={props.currentUser}/>       
        </div>
    </div>
)}

export default Header;