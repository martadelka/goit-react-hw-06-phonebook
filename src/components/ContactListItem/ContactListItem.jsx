import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import css from './ContactListItem.module.css'

function ContactListItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.contacts__item} key={id}>
    <p className={css.contacts__name}>{name}</p>
    <p className={css.contacts__number}> {phone}</p>
    <button
        onClick={() => {
        handleDeleteContact(id);
        }}
        className={css.contacts__btn}
    >
        Delete
    </button>
    </li>
  );
}

export default ContactListItem;