import React from 'react';
import './UserPhoto.styles.scss';

const UserPhoto = (props) => {
    var photoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67YWZtH8-wEK3fV4GBMhUusWwulCo8eaMhA&usqp=CAU'
    if (props.photoURL) {photoURL = props.photoURL}
    return (<img className='user-photo' alt={props.userName} title={props.userName} src={photoURL}/>)
};

export default UserPhoto;
