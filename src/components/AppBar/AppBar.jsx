import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors } from '../../redux/auth';
import styles from './AppBar.module.css';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
