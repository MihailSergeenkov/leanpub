import React from 'react';

import authContext from './authContext';
import UserCard from './UserCard';

const UserInfo = () => (
  <authContext.Consumer>
    {
      (data) => {
        const { 
          firstName = 'Unknown', 
          lastName = 'Unknown', 
          avatarUrl, 
          email,
        } = data.currentUser;

        const fullName = `${firstName} ${lastName}`;

        return (
          <UserCard 
            fullName={fullName} 
            email={email} 
            avatar={avatarUrl} 
          />
        );
      }
    }
  </authContext.Consumer>
);

export default UserInfo;
