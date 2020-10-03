import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import AuthorsList from '../../AuthorsList';

const authors = [
  {
    fullName: 'Swizec Teller',
    email: 'swizec_teller@email.com',
    avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/8250/original/Screen_Shot_2012-04-11_at_10.13.10_AM.png?1450662429',
    information: 'Hi, I’m a digital nomad and full stack web engineer.'
  },
  {
    fullName: 'Rafael A Irizarry',
    email: 'rafael_a_irizarry@email.com',
    avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/417060/original/Rafacrop.jpg?1439382014',
    information: 'Rafael Irizarry is a Professor of Biostatistics and Computational Biology.'
  },
  {
    fullName: 'Matthias Noback',
    email: 'matthias_noback@email.com',
    avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/128284/original/matthias-noback.jpg?1586530171',
    information: 'Matthias Noback has been building web applications since 2003.'
  },
  {
    fullName: 'Jeff Geerling',
    email: 'jeff_geerling@email.com',
    avatar: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/209668/original/Social_Media_800px.jpg?1539382677',
    information: 'Jeff Geerling is a developer who has worked in programming and DevOps-related positions.'
  },
];

test('renders authors in a list', () => {
  const { getByText } = render(<AuthorsList authors={authors} />);

  const firstAuthor = authors[0];
  const secondAuthor = authors[1];

  const firstElementText = `<a href="mailto:${firstAuthor.email}">${firstAuthor.fullName}</a>`;
  const secondElementText = `<a href="mailto:${secondAuthor.email}">${secondAuthor.fullName}</a>`;

  expect(getByText(firstAuthor.fullName)).toContainHTML(firstElementText);
  expect(getByText(firstAuthor.information)).toBeInTheDocument();
  expect(getByText(secondAuthor.fullName)).toContainHTML(secondElementText);
  expect(getByText(secondAuthor.information)).toBeInTheDocument();
});

test('renders an empty in a list', () => {
  const { getByText } = render(<AuthorsList />);

  const text = 'Empty authors';

  expect(getByText(text)).toBeInTheDocument();
});

test('renders all authors after click on button', () => {
  const { getByText, queryByText } = render(<AuthorsList authors={authors} />);

  const fourthAuthor = authors[3];
  const fourthElementText = `<a href="mailto:${fourthAuthor.email}">${fourthAuthor.fullName}</a>`;

  expect(queryByText(fourthAuthor.fullName)).toBeNull();
  expect(queryByText(fourthAuthor.information)).toBeNull();

  fireEvent.click(getByText('Show all'));

  expect(getByText(fourthAuthor.fullName)).toContainHTML(fourthElementText);
  expect(getByText(fourthAuthor.information)).toBeInTheDocument();
});
