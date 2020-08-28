import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import Input from './Input';
import Result from './Result';

const useStyles = createUseStyles({
  root: {
    margin: 10,
  },
}, { name: 'Pay' });


const Pay = ({ minimumPrice }) => {
  const classes = useStyles();

  const minimumPriceInt = parseInt(minimumPrice);
  const [userPay, setUserPay] = useState(minimumPriceInt);

  const handleChange = (e) => {
    const userPay = parseInt(e.target.value || 0);
    userPay > minimumPriceInt ? 
      setUserPay(userPay) :
      setUserPay(minimumPriceInt);
  };

  return (
    <div className={classes.root}>
      <div>Pay</div>
      <Input 
        minimumPrice={minimumPriceInt} 
        currentPay={userPay} 
        handleChange={handleChange} 
      />
      <Result userPay={userPay} />
    </div>
  );
};

Pay.propTypes = {
  minimumPrice: PropTypes.string,
};

export default Pay;
