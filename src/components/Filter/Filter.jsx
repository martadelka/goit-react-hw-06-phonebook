import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css'

function FilterComponent() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div className={css.filter}>
      <h2>Filter contacts</h2>
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contact"
      />
    </div>
  );
}

export default FilterComponent;