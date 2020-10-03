import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import AuthorCard from '../components/AuthorCard';

test('renders author in a card', () => {
  const author = {
    fullName: 'Swizec Teller',
    email: 'swizec_teller@email.com',
    avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/8250/original/Screen_Shot_2012-04-11_at_10.13.10_AM.png?1450662429',
    information: 'Hi, I’m a digital nomad and full stack web engineer.',
  };

  const { getByText } = render(<AuthorCard author={author} />);

  const elementText = `<a href="mailto:${author.email}">${author.fullName}</a>`;

  expect(getByText(author.fullName)).toContainHTML(elementText);
  expect(getByText(author.information)).toBeInTheDocument();
});

test('renders an empty author in a card', () => {
  const { getByText } = render(<AuthorCard />)

  const text = 'Empty author';

  expect(getByText(text)).toBeInTheDocument();
});

test('renders an empty avatar in a card', () => {
  const author = {
    fullName: 'Swizec Teller',
    email: 'swizec_teller@email.com',
    information: 'Hi, I’m a digital nomad and full stack web engineer.',
  };
  
  const { getByText } = render(<AuthorCard author={author} />);

  const text = 'Empty avatar';

  expect(getByText(text)).toBeInTheDocument();
});

describe('when empty email', () => {
  test('renders div element', () => {
    const author = {
      fullName: 'Swizec Teller',
      information: 'Hi, I’m a digital nomad and full stack web engineer.',
    };
    
    const { getByText } = render(<AuthorCard author={author} />);
  
    const elementText = `<div>${author.fullName}</div>`;

    expect(getByText(author.fullName)).toContainHTML(elementText);
  });
});
