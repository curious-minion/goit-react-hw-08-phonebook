import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

import shortid from 'shortid';
import {
  contactEditor_form,
  placeholder,
  label,
  add_contact,
} from './ContactEditor.module.css';

export default function ContactEditor() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const filteredContacts = useSelector(getVisibleContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewContact(filteredContacts, name, number));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  return (
    <form className={contactEditor_form} onSubmit={handleSubmit}>
      <label className={label} htmlFor={nameId} aria-label="Name">
        Name
      </label>
      <input
        className={placeholder}
        type="text"
        id={nameId}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleChange}
        placeholder="Enter a name"
        autoComplete="off"
        value={name}
        required
      />
      <label className={label} htmlFor={numberId} aria-label="Number">
        Phone number
      </label>
      <input
        className={placeholder}
        type="tel"
        placeholder="Enter a phone number"
        autoComplete="off"
        id={numberId}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
        value={number}
      />
      <button type="submit" className={add_contact}>
        Add contact
      </button>
    </form>
  );
}
