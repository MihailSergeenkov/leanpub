import React from 'react';

import AuthContext from './AuthContext';
import UserCard from './UserCard';

const UserInfo = () => (
  <AuthContext.Consumer>
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
  </AuthContext.Consumer>
);

export default UserInfo;
