import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/shared/App';
import AuthContext from './components/shared/Contexts/AuthContext';
import WishlistProvider from './components/shared/Providers/WishlistProvider';

import './index.css';

const currentUser = {
  email: 'user@email.com',
  firstName: 'Patrick',
  lastName: 'Wam',
  avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1846165/original/DSC_7016-small.jpg?1581154864'
};

ReactDOM.render(
  <AuthContext.Provider value={{currentUser: currentUser}}>
    <WishlistProvider>
      <Router>
        <App />
      </Router>
    </WishlistProvider>
  </AuthContext.Provider>,
  document.getElementById('root')
);
