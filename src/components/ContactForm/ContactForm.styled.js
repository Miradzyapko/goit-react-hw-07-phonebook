import styled from "styled-components";
export const Title = styled.h2`
text-align: center;
color: black;
  &:hover {
    text-shadow: 0px 0px 13px rgba(0, 0, 0, 1);
   
    
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  color: black;
  background: blue
`;
export const Button = styled.button
`margin-top: 20px;
padding: 15px 25px;
cursor: pointer
border-radius: 4px
border: 1px solid grey;
background: orange`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 100px auto;
  border: 1px solid black;
  background-color: grey;
  `;
  export const Label = styled.label`
  font-size: 14px
  color-text: black`;
 