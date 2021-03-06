import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
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
    padding: 10,
  },
}, { name: 'AdditionalInfoModal' });

const AdditionalInfoModal = ({ text }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a onClick={toggle}>Additional info</a>
      {
        isOpen && ReactDOM.createPortal(
          <div className={classes.overlay}>
            <div className={classes.body}>
              {text}
            </div>
            <button onClick={toggle}>Close</button>
          </div>,
          document.getElementById('modal-root')
        )
      }
    </>
  );
};

AdditionalInfoModal.propTypes = {
  text: PropTypes.string,
};

export default AdditionalInfoModal;
