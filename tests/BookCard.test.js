import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import BookCard from '../src/BookCard';
import WishlistProvider from '../src/WishlistProvider';

test('renders book in a card', () => {
  const book = {
    name: 'React+D3v4',
    description: 'Reusable dataviz & games using modern JavaScript',
    pages: '249',
    language: 'english',
    progress: '100',
    link: 'https://d2sofvawe08yqg.cloudfront.net/reactd3jses6/hero2x?1549481353',
    minimumPrice: '49.00',
    suggestedPrice: '49.00',
    collectedAmount: '5039.00',
    expectedAmount: '8000.00'
  };

  const { getByText } = render(
    <WishlistProvider>
      <Router>
        <BookCard book={book} />
      </Router>
    </WishlistProvider>
  );

  const pagesText = `Pages: ${book.pages}`;
  const languageText = `Language: ${book.language}`;
  const progressText = `Progress: ${book.progress}`;
  const minimumPriceText = `Minimum price: ${book.minimumPrice}`;
  const suggestedPriceText = `Suggested price: ${book.suggestedPrice}`;
  const collectedAmountText = `Collected amount: ${book.collectedAmount}`;
  const expectedAmountText = `Expected amount: ${book.expectedAmount}`;

  expect(getByText(book.name)).toBeInTheDocument();
  expect(getByText(book.description)).toBeInTheDocument();
  expect(getByText(pagesText)).toBeInTheDocument();
  expect(getByText(languageText)).toBeInTheDocument();
  expect(getByText(progressText)).toBeInTheDocument();
  expect(getByText(minimumPriceText)).toBeInTheDocument();
  expect(getByText(suggestedPriceText)).toBeInTheDocument();
  expect(getByText(collectedAmountText)).toBeInTheDocument();
  expect(getByText(expectedAmountText)).toBeInTheDocument();
});

test('renders an empty book in a card', () => {
  const { getByText } = render(
    <Router>
      <BookCard />
    </Router>
  );

  const text = 'Empty book';

  expect(getByText(text)).toBeInTheDocument();
});
