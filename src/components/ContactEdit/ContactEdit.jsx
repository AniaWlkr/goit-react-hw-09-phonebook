import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import commonStyles from '../commonStyles/formComStyles.module.css';
import styles from './ContactEdit.module.css';
import { operations, selectors } from '../../redux/contacts';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ContactEdit = ({ toggleModal }) => {
  const contactId = useSelector(selectors.getContactId);

  const contact = useSelector(selectors.getAllContacts).find(
    contact => contact.id === contactId,
  );

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    setName(contact.name);
    setNumber(contact.number);
  }, []);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setName(value);
        break;

      default:
        console.error('This field is not defined');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const updatedContact = {
      name,
      number,
    };

    dispatch(operations.changeContact(contactId, updatedContact));
    toggleModal();

    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={commonStyles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            className={commonStyles.input}
          />
        </label>
        <label className={commonStyles.label}>
          Phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            className={commonStyles.input}
          />
        </label>
        <Button
          type="submit"
          title="Change contact &nbsp; ✅"
          className={commonStyles.button}
        />
      </form>
    </div>
  );
};

ContactEdit.propTypes = {
  contactId: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default ContactEdit;
