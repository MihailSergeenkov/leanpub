import React from 'react';

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
};

class AuthorCard extends React.Component {
  render() {
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
          <img style={styles.avatar} src={avatar} alt={fullName} />
        </div>
        <h4 style={styles.fullName}>
          <a href={`mailto:${email}`}>{fullName}</a>
        </h4>
        <h6 style={styles.information}>{information}</h6>
      </div>
    );
  }
}

export default AuthorCard;