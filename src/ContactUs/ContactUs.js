import React, { useState } from 'react';
import { createUseStyles } from 'react-jss'

import Input from './Input';
import SendButton from './SendButton';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}, { name: 'ContactUs' });


const ContactUs = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleClick = () => {
    console.log(form);
  };

  const handleChange = (field) => {
    return (e) => {
      setForm({
        ...form,
        [field]: e.target.value,
      })
    };
  };

  return (
    <span className={classes.root}>
      <Input label='Name' value={form.name} handleChange={handleChange('name')} />
      <Input label='Email' value={form.email} handleChange={handleChange('email')} />
      <Input label='Message' value={form.message} handleChange={handleChange('message')} />
      <SendButton handleClick={handleClick} />
    </span>
  );
};

export default ContactUs;
