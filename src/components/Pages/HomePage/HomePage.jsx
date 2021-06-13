import React from 'react';
import homeImg from '../../../image/yellow-pages.png';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Phonebook</h1>
      <img className={styles.image} src={homeImg} alt="yellow-pages" />
    </div>
  );
};

export default HomePage;
