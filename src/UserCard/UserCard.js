import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import FullName from './FullName';

const UserCard = ({ fullName, email, avatar }) => (
  <div>
    <Avatar email={email} avatar={avatar} />
    <FullName email={email} fullName={fullName} />
  </div>
);

UserCard.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserCard;
