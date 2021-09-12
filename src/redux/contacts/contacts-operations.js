import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError());
  }
};

export const addNewContact = (contacts, name, number) => dispatch => {
  const savedContact = contacts.find(contact => contact.name === name);
  if (savedContact) {
    alert(`${name} is already in contacts`);
    return;
  }

  const savedNumber = contacts.find(contact => contact.number === number);

  if (savedNumber) {
    alert(`${number} has already been saved`);
    return;
  }
  dispatch(addContactRequest());

  const contact = {
    name,
    number,
  };

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
