import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import GeneralInfo from './GeneralInfo';
import Image from './Image';
import AdditionalInfo from './AdditionalInfo';
import SimilarBooks from '../SimilarBooks';
import Pay from '../Pay';
import ScrollTopButton from '../ScrollTopButton';
import withLoading from '../HOC/withLoading';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    fontFamily: 'sans-serif',
    margin: 20,
    flexDirection: 'column',
  },
  '@media (min-width: 800px)': {
    root: {
      flexDirection: 'row',
    },
  },
}, { name: 'BookCard' });

const BookCard = ({ book, similarBooks }) => {
  if (!book)
    return <div>Empty book</div>;

  const classes = useStyles();

  const { 
    name,
    description,
    pages,
    language,
    progress,
    link,
    authors,
    minimumPrice,
    suggestedPrice,
    collectedAmount,
    expectedAmount,
    readers,
    additionalInfo
  } = book;

  return (
    <div className={classes.root}>
      <GeneralInfo 
        name={name} 
        description={description}
        readers={readers}
        authors={authors}
        additionalInfo={additionalInfo}
      />
      <Image 
        alt={name} 
        src={link}
      />
      <AdditionalInfo 
        minimumPrice={minimumPrice} 
        suggestedPrice={suggestedPrice}
        collectedAmount={collectedAmount}
        expectedAmount={expectedAmount}
        pages={pages}
        language={language}
        progress={progress}
        readers={readers}
      />
      <Pay minimumPrice={minimumPrice} />
      <SimilarBooks similarBooks={similarBooks} />
      <ScrollTopButton />
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.exact({
    name: PropTypes.string,
    description: PropTypes.string,
    pages: PropTypes.string,
    language: PropTypes.string,
    progress: PropTypes.string,
    link: PropTypes.string,
    authors: PropTypes.array,
    minimumPrice: PropTypes.string,
    suggestedPrice: PropTypes.string,
    collectedAmount: PropTypes.string,
    expectedAmount: PropTypes.string,
    readers: PropTypes.number,
    additionalInfo: PropTypes.string,
  }),
  similarBooks: PropTypes.array,
};

export default withLoading(BookCard);
