import { useState } from 'react';
import css from './ContactForm.module.css'
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    event.target.reset();
  };

  return (
    <section className={css.form}>
      <h1 className={css.form__title}>Phonebook</h1>
      <form className={css.form__container} onSubmit={handleSubmit}>
        <label className={css.form__label}>Name</label>
        <input
          type="text"
          name="name"
          className={css.form__input}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
        <label className={css.form__label}>Number</label>
        <input
          type="tel"
          name="number"
          className={css.form__input}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          required
        />
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

