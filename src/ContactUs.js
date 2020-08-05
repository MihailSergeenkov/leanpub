import React, { useState } from 'react';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    console.log({
      name: name,
      email: email,
      message: message,
    });
  };

  const handleChange = (setField) => {
    return (e) => {
      setField(e.target.value);
    };
  };

  return (
    <span style={styles.root}>
      <label>Name</label>
      <input type='text' value={name} onChange={handleChange(setName)} />
      <label>Email</label>
      <input type='text' value={email} onChange={handleChange(setEmail)} />
      <label>Message</label>
      <input type='text' value={message} onChange={handleChange(setMessage)} />
      <button onClick={handleClick}>Send</button>
    </span>
  );
};

export default ContactUs;
