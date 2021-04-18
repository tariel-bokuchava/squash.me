import React from 'react';
import './SignOutButton.styles.scss';

import { Link } from 'react-router-dom';
import { auth } from '../../includes/Firebase/firebase-auth-utils';
import UserPhoto from '../UserPhoto/UserPhoto.component';

const SignOutButton = (props) => {
    console.log(props.currentUser);
    return (
        props.currentUser != null
                    ? 
            <div>
                <UserPhoto userName={props.currentUser.displayName} photoURL={props.currentUser.photoURL}/>
                <Link   className='header-menu-item'
                        to='/'          
                        onClick={(e) => auth.signOut()}>
                            Sign Out
                </Link>
            </div>
                    :
            <Link className='header-menu-item' to='/signin'>SignIn</Link>
    )

}

export default SignOutButton;