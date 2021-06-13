import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors } from '../../redux/auth';
import classnames from 'classnames';
import commonStyles from '../commonStyles/linkComStyles.module.css';
import styles from './Navigation.module.css';
import routes from '../routes';

const Navigation = () => {
  const isAuthenticated = useSelector(selectors.getIsAuthenticated);

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

export default Navigation;
