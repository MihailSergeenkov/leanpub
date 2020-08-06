import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Result from './Result';

const styles = {
  root: {
    margin: '10px',
  },
};

const Pay = ({ minimumPrice }) => {
  const minimumPriceInt = parseInt(minimumPrice);
  const [userPay, setUserPay] = useState(minimumPriceInt);

  const handleChange = (e) => {
    setUserPay(parseInt(e.target.value));
  };

  return (
    <div style={styles.root}>
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
