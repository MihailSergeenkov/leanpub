import React from 'react';
import PropTypes from 'prop-types';

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
        <div style={styles.avatarBox}>
          {
            avatar ? (
              <img style={styles.avatar} src={avatar} alt={fullName} />
            ) : (
              <div style={styles.badAvatar}>Empty avatar</div>
            )
          }
        </div>
        <h4 style={styles.fullName}>
          <a href={`mailto:${email}`}>{fullName}</a>
        </h4>
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