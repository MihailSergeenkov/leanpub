import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    maxWidth: '200px',
  },
  image: {
    width: '100%',
  },
};

class Image extends React.Component {
  render() {
    const { alt, src } = this.props;
  
    return (
      <div style={styles.root}>
        <img style={styles.image} src={src} alt={alt} />
      </div>
    );
  }
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
