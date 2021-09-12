import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'components/container';
import ContactEditor from 'components/contactEditor';
import Filter from 'components/filter';
import ContactList from 'components/contactList';

import { isLoading } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Loader from 'react-loader-spinner';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(isLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactEditor />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && (
        <h3>
          {' '}
          Loading
          <Loader type="ThreeDots" color="#00BFFF" height={60} width={60} />
        </h3>
      )}
      <ContactList />
    </Container>
  );
}
