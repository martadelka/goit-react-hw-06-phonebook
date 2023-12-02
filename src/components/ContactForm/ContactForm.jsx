import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css'

const defaultValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmitForm = (values, action) => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      return Notiflix.Notify.failure(
        'Contact with the same name or phone number already exists!',
        {
          position: 'center-top',
        }
      );
    }

    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmitForm}>
      <form className={css.form__container}>
        <label className={css.form__label}>Name</label>
        <input
          type="text"
          name="name"
          className={css.form__input}
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          required
        />
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;





// import PropTypes from 'prop-types';
// import React from 'react';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactSlice';
// import Notiflix from 'notiflix';
// import css from './ContactForm.module.css'

// const phonebookSchema = Yup.object().shape({
//   name: Yup.string()
//     .trim()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
//     )
//     .required('Name is required'),
//   phone: Yup.string()
//     .trim()
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required('Phone number is required'),
// });

// function ContactForm({ contacts }) {
//   const initialValues = {
//     name: '',
//     phone: '',
//   };

//   const dispatch = useDispatch();

//   const isContactDuplicate = (name, phone) => {
//     return contacts.some(
//       contact => contact.name === name || contact.phone === phone
//     );
//   };

//   const handleSubmit = (values, actions) => {
//     const { name, phone } = values;

//     const isDuplicateContact = isContactDuplicate(name, phone);
//     if (isDuplicateContact) {
//       Notiflix.Notify.failure(
//         'Contact with the same name or phone number already exists!',
//         {
//           position: 'center-top',
//         }
//       );
//       return;
//     }

//     const newContact = { id: nanoid(), name, phone };
//     dispatch(addContact(newContact));
//     actions.resetForm();

//     Notiflix.Notify.success('Contact added successfully!');
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={phonebookSchema}
//         onSubmit={handleSubmit}
//       >
//         <form className={css.form__container} onSubmit={handleSubmit}>
//         <label className={css.form__label}>Name</label>
//         <input
//           type="text"
//           name="name"
//           className={css.form__input}
//           // onChange={handleChangeName}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           placeholder="Enter name"
//           required
//         />
//         <label className={css.form__label}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           className={css.form__input}
//           // onChange={handleChangeNumber}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           placeholder="Enter phone number"
//           required
//         />
//         <button className={css.form__btn} type="submit">
//           Add contact
//         </button>
//       </form>
//       </Formik>
//     </div>
//   );
// }

// ContactForm.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

// export default ContactForm;






// export const ContactForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChangeName = event => {
//     setName(event.target.value);
//   };

//   const handleChangeNumber = event => {
//     setNumber(event.target.value);
//   };
  
//   const handleSubmit = event => {
//     event.preventDefault();
//     onSubmit({ name, number });
//     event.target.reset();
//   };

//   return (
//     <section className={css.form}>
//       <h1 className={css.form__title}>Phonebook</h1>
//       <form className={css.form__container} onSubmit={handleSubmit}>
//         <label className={css.form__label}>Name</label>
//         <input
//           type="text"
//           name="name"
//           className={css.form__input}
//           onChange={handleChangeName}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           placeholder="Enter name"
//           required
//         />
//         <label className={css.form__label}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           className={css.form__input}
//           onChange={handleChangeNumber}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           placeholder="Enter phone number"
//           required
//         />
//         <button className={css.form__btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     </section>
//   );
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


