import React from 'react';
import { useDispatch } from 'react-redux';
import { fromfilter } from 'redux/contacts/filtr';
import css from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterData = e => {
    dispatch(fromfilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <h2 className={css.find_title}>Find contacts by name</h2>
      <input
        type="text"
        className={css.find_input}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filterData}
      />
    </div>
  );
};

export default Filter;
