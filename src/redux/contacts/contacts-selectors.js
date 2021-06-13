import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getContactId = state => state.contacts.contactId;
const getAllContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    return filter
      ? items.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase()),
        )
      : items;
  },
);

export default {
  getLoading,
  getFilteredContacts,
  getFilter,
  getAllContacts,
  getContactId,
};
