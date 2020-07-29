import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px',
  },
};

class AdditionalInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { text } = this.props;

    return (
      <>
        <a onClick={() => this.toggle()}>Additional info</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                {text}
              </div>
              <button onClick={() => this.toggle()}>Close</button>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

AdditionalInfoModal.propTypes = {
  text: PropTypes.string,
};

export default AdditionalInfoModal;