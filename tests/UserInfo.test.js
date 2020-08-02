import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import authContext from '../src/authContext';
import UserInfo from '../src/UserInfo';

test('renders user info', () => {
  const user = {
    firstName: 'Swizec',
    lastName: 'Teller',
    email: 'swizec_teller@email.com',
    avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/8250/original/Screen_Shot_2012-04-11_at_10.13.10_AM.png?1450662429',
  };

  const { getByText } = render(
    <authContext.Provider value={{currentUser: user}}>
      <UserInfo />
    </authContext.Provider>
  );


  const userFullName = `${user.firstName} ${user.lastName}`;
  const elementText = `<a href="mailto:${user.email}">${userFullName}</a>`;

  expect(getByText(userFullName)).toContainHTML(elementText);
});

describe('when empty first and last name', () => {
  test('renders defaults', () => {
    const user = {};
    
    const { getByText } = render(
      <authContext.Provider value={{currentUser: user}}>
        <UserInfo />
      </authContext.Provider>
    );
  
    const text = 'Unknown Unknown';
    const elementText = `<div>${text}</div>`;

    expect(getByText(text)).toContainHTML(elementText);
  });
});
