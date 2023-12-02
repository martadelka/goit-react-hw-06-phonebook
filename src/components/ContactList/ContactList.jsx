import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import Notiflix from 'notiflix';
import css from './ContactList.module.css'

function ContactList() {
  const filterFunction = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filterFunction.toLowerCase())
  );

  if (!filteredContacts?.length) {
    Notiflix.Notify.info('No contacts found.');
  }

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;


