import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';

const styles = {
  root: {
    margin: '10px 0px',
  },
  avatarBox: {
    maxWidth: '50px',
  },
  avatar: {
    width: '100%',
  },
  fullName: {
    margin: '0px',
  },
  information: {
    margin: '0px 0px 10px',
    color: 'gray',
  },
  badAvatar: {
    backgroundColor: 'grey',
    width: '100%',
    minHeight: '50px',
  }
};

class AuthorCard extends React.Component {
  render() {
    if (!this.props.author)
      return <div>Empty author</div>;

    const { 
      author: {
        fullName,
        email,
        avatar,
        information,
      }
    } = this.props;
  
    return (
      <div style={styles.root}>
        <UserCard fullName={fullName} email={email} avatar={avatar} />
        <h6 style={styles.information}>{information}</h6>
      </div>
    );
  }
}

AuthorCard.propTypes = {
  author: PropTypes.exact({
    fullName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    information: PropTypes.string
  })
};

export default AuthorCard;
