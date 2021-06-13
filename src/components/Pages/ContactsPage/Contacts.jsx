import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import { operations } from '../../../redux/contacts';
import ContactForm from '../../ContactForm';
import ContactList from '../../ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), []);

  return (
    <div className={styles.container}>
      <h1 className={styles.headTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <ContactList />
    </div>
  );
};

Contacts.propTypes = {
  fetchContacts: PropTypes.func,
};

export default Contacts;
