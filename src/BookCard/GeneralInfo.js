import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import AuthorsList from '../AuthorsList';
import AdditionalInfoModal from '../AdditionalInfoModal';

const useStyles = createUseStyles({
  root: {
    margin: '0px 20px',
    maxWidth: 200,
  },
  title: {
    margin: '10px 0px'
  },
  description: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
}, { name: 'GeneralInfo' });

const GeneralInfo = ({ 
  name,
  description,
  authors,
  readers,
  additionalInfo,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{name}</h3>
      <h6 className={classes.description}>{description}</h6>
      {readers > 1000 && <h6>Popular book</h6>}
      <AdditionalInfoModal text={additionalInfo} />
      <AuthorsList authors={authors} />
    </div>
  );
};

GeneralInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.array,
  readers: PropTypes.number,
  additionalInfo: PropTypes.string
};

export default GeneralInfo;
