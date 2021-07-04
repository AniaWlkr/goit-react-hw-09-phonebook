import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux/auth';
import styles from './UserMenu.module.scss';
import Button from '../Button';
import { useCallback } from 'react';

const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectors.getUserName);
  const handleLogout = useCallback(() => {
    dispatch(operations.logoutUser());
  }, [dispatch]);

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
