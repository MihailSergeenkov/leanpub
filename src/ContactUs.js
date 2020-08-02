import React from 'react';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleClick() {
    console.log(this.state);
  }

  handleChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value,
      })
    };
  }

  render() {
    const { name, email, message } = this.state;
  
    return (
      <span style={styles.root}>
        <label>Name</label>
        <input type='text' value={name} onChange={this.handleChange('name')} />
        <label>Email</label>
        <input type='text' value={email} onChange={this.handleChange('email')} />
        <label>Message</label>
        <input type='text' value={message} onChange={this.handleChange('message')} />
        <button onClick={this.handleClick}>Send</button>
      </span>
    );
  }
}

export default ContactUs;
