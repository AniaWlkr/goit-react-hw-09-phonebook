import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './AuthNav.module.scss';
import commonStyles from '../commonStyles/linkComStyles.module.scss';
import routes from '../routes';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={routes.register}
        className={classnames(styles.linkRegister, commonStyles.link)}
        activeClassName={commonStyles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to={routes.login}
        className={commonStyles.link}
        activeClassName={commonStyles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
