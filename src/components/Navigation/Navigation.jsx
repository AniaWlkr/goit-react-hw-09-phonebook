import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import commonStyles from '../commonStyles/linkComStyles.module.css';
import styles from './Navigation.module.css';
import classnames from 'classnames';
import routes from '../routes';
import { selectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className={classnames(commonStyles.link, styles.linkHome)}
        activeClassName={commonStyles.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          exact
          className={commonStyles.link}
          activeClassName={commonStyles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
