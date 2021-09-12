import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';

import { contactItem, contactDelete } from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <ul className="contactList">
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className={contactItem}>
            <span>
              {name}: {number}
            </span>
            {/* <span>{number}</span>  */}
            <button
              type="button"
              className={contactDelete}
              onClick={() => onDeleteContact(id)}
            ></button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
