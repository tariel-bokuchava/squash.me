import React from 'react';
import PropTypes from 'prop-types';
import './UserPhoto.styles.scss';

const UserPhoto = ({ photoURL, userName }) => {
  let defaultURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67YWZtH8-wEK3fV4GBMhUusWwulCo8eaMhA&usqp=CAU';
  if (photoURL) {
    defaultURL = photoURL;
  }
  return (
    <img
      className='user-photo'
      alt={userName}
      title={userName}
      src={defaultURL}
    />
  );
};

UserPhoto.propTypes = {
  photoURL: PropTypes.string,
  userName: PropTypes.string,
};

UserPhoto.defaultProps = {
  photoURL: '',
  userName: '',
};

export default UserPhoto;
