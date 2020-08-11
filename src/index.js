import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AuthContext from './AuthContext';

import './index.css';

const currentUser = {
  email: 'user@email.com',
  firstName: 'Patrick',
  lastName: 'Wam',
  avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1846165/original/DSC_7016-small.jpg?1581154864'
};

ReactDOM.render(
  <AuthContext.Provider value={{currentUser: currentUser}}>
    <App />
  </AuthContext.Provider>,
  document.getElementById('root')
);
