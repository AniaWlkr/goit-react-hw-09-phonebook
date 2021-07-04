import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { operations, selectors, changeContactId } from '../../redux/contacts';
import styles from './ContactList.module.scss';
import ContactFilter from '../ContactFilter';
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import ContactEdit from '../ContactEdit';
import { useCallback } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectors.getFilteredContacts);
  const isLoadingContacts = useSelector(selectors.getLoading);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const onChangeBtnClick = id => {
    dispatch(changeContactId(id));

    toggleModal();
  };

  const handleDelete = contactId =>
    dispatch(operations.deleteContact(contactId));

  return (
    <div className={styles.section}>
      <ContactFilter />
      {isLoadingContacts && <Loader />}
      {contacts.length ? (
        <ul className={styles.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={styles.item}>
              {contact.name}: {contact.number}
              <div>
                <Button
                  type="button"
                  cbOnClick={onChangeBtnClick}
                  cbArgs={[contact.id]}
                  className={styles.button}
                  title="Change &nbsp; 📝"
                />
                <Button
                  type="button"
                  cbOnClick={handleDelete}
                  cbArgs={[contact.id]}
                  className={styles.button}
                  title="Delete &nbsp; ❌"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.notification}>
          <span role="img" aria-label="sad face icon">
            😔
          </span>{' '}
          No name in Phonebook
        </p>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactEdit toggleModal={toggleModal} />{' '}
        </Modal>
      )}
    </div>
  );
};

ContactList.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleDelete: PropTypes.func,
  isLoadingContacts: PropTypes.bool,
};

export default ContactList;
