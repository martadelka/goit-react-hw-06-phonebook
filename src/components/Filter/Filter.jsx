import React from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css'

const filterId = nanoid();

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        id={filterId}
        value={value}
        onChange={onChange}
        placeholder="Find contact"
      />
    </div>
  );
}
