import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux/auth';
import styles from './UserMenu.module.css';
import Button from '../Button';

const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectors.getUserName);
  const handleLogout = () => dispatch(operations.logoutUser());

  return (
    <div className={styles.container}>
      <p className={styles.greeting}>Welcome, {userName}</p>
      <Button
        title="Logout"
        cbOnClick={handleLogout}
        className={styles.button}
      />
    </div>
  );
};

export default UserMenu;
