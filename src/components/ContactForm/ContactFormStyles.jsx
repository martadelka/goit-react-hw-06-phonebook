import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const ContactFormWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
`;
export const ContactTitle = styled.h1`
  font-size: 3vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-item: center;
  justify-content: center;
`;
export const Label = styled.label`
  color: #000;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  margin-top: 0.3125rem;
`;

export const Button = styled.button`
    width: 100%;
    background-color: #f3f6f9;
    border: none;
    border-radius: 10px;
    color: #82909e;
    cursor: pointer;
    height: 2.5rem;
    padding: 0.3125rem 0.46875rem;
    margin-top: 0.625rem;
    margin-bottom: 0.5rem;
    text-align: center;
    transition: all 300ms;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

export const FormWrapper = styled.div`
  max-width: 18.75rem;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;
  label {
    margin-bottom: 0.3125rem;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    border: 0.0625rem solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;

    &:focus {
      outline: 1px solid #b5c6e7
    }
  }
  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.3125rem;
  }
`;



// .form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// .form__title {
//     display: flex;
//     justify-content: center;
// }

// .form__container {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
// }

// .form__label {
//     padding-bottom: 10px;
//     margin-left: 10px;
// }

// .form__input {
//     margin-bottom: 20px;
//     width: 200px;
//     border: 1px solid #e4e9f0;
//     border-radius: 60px;
//     padding: 10px 15px;
// }

// .form__input:focus {
//     outline: 1px solid #b5c6e7;
// }

// .form__btn {
//     width: 100px;
//     background-color: #f3f6f9;
//     border: none;
//     border-radius: 10px;
//     color: #82909e;
//     cursor: pointer;
//     padding: 10px;
//     text-align: center;
//     transition: all 300ms;
//     margin: 5px auto 0;
// }

// .form__btn:hover {
//     background-color: #3b507b;
//     color: #fff;
// }