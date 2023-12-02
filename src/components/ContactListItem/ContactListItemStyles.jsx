import styled from '@emotion/styled';

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactName = styled.h3`
  margin: 0;
  font-size: 1.5vw;
`;

export const ContactPhone = styled.p`
  margin: 0;
  font-size: 1vw;
  color: #666;
`;

export const DeleteButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  margin-left: 0.625rem;
`;


// .contacts__btn {
//     width: 100px;
//     background-color: #f3f6f9;
//     border: none;
//     border-radius: 10px;
//     color: #82909e;
//     cursor: pointer;
//     padding: 10px;
//     text-align: center;
//     transition: all 300ms;
//     margin: 0 auto 0;
// }

// .contacts__btn:hover {
//     background-color: #3b507b;
//     color: #fff;
// }

// .contacts__item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 20px;
//     flex: calc(25% - 40px);
// }

// .contacts__name {
//     margin: 0;
//     padding: 0;
//     font-size: 15px;
//     text-align: center;
// }

// .contacts__number {
//     font-weight: 600;
//     margin: 10px;
//     font-size: 15px;
// }