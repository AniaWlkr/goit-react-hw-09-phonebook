import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { operations } from '../../redux/contacts';
import styles from '../commonStyles/formComStyles.module.scss';
import Button from '../Button/Button';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleNameChange = event => setName(event.currentTarget.value);

  const [number, setNumber] = useState('');
  const handleNumberChange = event => setNumber(event.currentTarget.value);

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
    };

    dispatch(operations.addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleNameChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Phone number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleNumberChange}
          className={styles.input}
        />
      </label>
      <Button
        type="submit"
        title="Add contact &nbsp; ✅"
        className={styles.button}
      />
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  addContact: PropTypes.func,
};

export default ContactForm;
