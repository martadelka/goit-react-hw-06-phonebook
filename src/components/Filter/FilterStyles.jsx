import styled from '@emotion/styled';

export const FilterWrapper=styled.div` display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2rem;
margin-bottom: 2rem;
`;

export const FilterLabel = styled.label` 
margin-bottom: 0.7rem;
font-size: 2vw;
display: block;
`;

export const FilterInput=styled.input` padding: 0.5rem;
width: 28%;
font-size: 1rem;
border: 0.0625rem solid #ccc;
border-radius: 0.25rem;
margin-top: 0.3125rem;

&:focus {
    outline: 1px solid #b5c6e7
}
`;



// .filter {
//     margin: 40px auto 0 auto;
// }

// .filter__input {
//     width: 200px;
//     border: 1px solid #e4e9f0;
//     border-radius: 60px;
//     padding: 10px 15px;
// }

// .filter__input:focus {
//     outline: 1px solid #b5c6e7;
// }