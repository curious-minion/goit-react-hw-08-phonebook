import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;
export const error = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact => contact.name.includes(normalizedFilter));
// };
