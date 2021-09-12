import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

import { filter_input, contact_search } from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={contact_search}>
      Find contact by name
      <input
        className={filter_input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
