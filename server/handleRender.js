import React from 'react';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../src/components/shared/App';
import AuthContext from '../src/components/shared/Contexts/AuthContext';
import WishlistProvider from '../src/components/shared/Providers/WishlistProvider';
import { renderFullPage } from './renderFullPage';

export async function handleRender(req, res) {
  const context = {};
  const currentUser = {
    email: 'user@email.com',
    firstName: 'Patrick',
    lastName: 'Wam',
    avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1846165/original/DSC_7016-small.jpg?1581154864'
  };

  const html = renderToString(
    <AuthContext.Provider value={{currentUser: currentUser}}>
      <WishlistProvider>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </WishlistProvider>
    </AuthContext.Provider>
  );

  return renderFullPage(res, html, Helmet.renderStatic());
}
