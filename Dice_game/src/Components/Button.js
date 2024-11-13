import styled from "styled-components";

 export const Button = styled.button`
  padding: 10px 18px;
  width: 220px;
  border-radius: 5px;
  background-color: #000;
  border: 2px solid #000;
  color: #fff;
  border: none;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    /* box-shadow: 2px 1px 5px 2px #ebc3ff; */
  }

`;

export const Outlinebutton = styled(Button)`
  border: 1px solid #000;
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
    /* border: 2px solid #000; */
    /* box-shadow: 2px 1px 5px 2px #ebc3ff; */
  }
`;