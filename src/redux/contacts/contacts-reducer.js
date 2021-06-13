import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
  changeFilter,
  changeContactId,
} = actions;

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    !state.find(contact => contact.number === payload.number)
      ? [...state, payload]
      : state,
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [changeContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactId = createReducer('', {
  [changeContactId]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,

  [changeContactRequest]: () => true,
  [changeContactSuccess]: () => false,
  [changeContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  contactId,
  loading,
});
