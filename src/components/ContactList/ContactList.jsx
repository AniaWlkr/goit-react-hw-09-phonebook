import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import ContactFilter from '../ContactFilter/ContactFilter';
import Loader from '../Loader';
import { operations, selectors, changeContactId } from '../../redux/contacts';
import Button from '../Button';
import Modal from '../Modal';
import ContactEdit from '../ContactEdit/ContactEdit';
import { useDispatch } from 'react-redux';

const ContactList = ({ contacts, handleDelete, isLoadingContacts }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const dispatch = useDispatch();

  const onChangeBtnClick = id => {
    dispatch(changeContactId(id));

    toggleModal();
  };

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

const mapStateToProps = state => ({
  contacts: selectors.getFilteredContacts(state),
  isLoadingContacts: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: contactId => dispatch(operations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
