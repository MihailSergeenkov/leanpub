import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    padding: 20,
  },
}, { name: 'ThemingPanel' });

const ThemingPanel = ({ handleChangeTheme }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <button onClick={handleChangeTheme('default')}>Default Theme</button>
      <button onClick={handleChangeTheme('new')}>New Theme</button>
    </div>
  );
};

ThemingPanel.propTypes = {
  handleChangeTheme: PropTypes.func,
};

export default ThemingPanel;
