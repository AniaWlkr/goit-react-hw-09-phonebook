import axios from 'axios';
import * as actions from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  return axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error.message)));
};

const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  return axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};

const changeContact = (contactId, updatedContact) => dispatch => {
  dispatch(actions.changeContactRequest());

  return axios
    .patch(`/contacts/${contactId}`, updatedContact)
    .then(({ data }) => dispatch(actions.changeContactSuccess(data)))
    .catch(error => dispatch(actions.changeContactError(error.message)));
};

export default { addContact, deleteContact, fetchContacts, changeContact };
