import React, { useState } from 'react';
import styled from 'styled-components';

const Selectnumber = ({number,setnumber , error , seterror}) => {

  const Arrnumber = [1, 2, 3, 4, 5, 6];

  const handalenumberselector = (value) => {
    setnumber(value);
    seterror("");
  }


console.log(number);




  return (
    <>
      <Selectdiv>
        
        <h5>{error}</h5>
        <div>
          {Arrnumber.map((value, i) => (
            <Box
              key={i}
              isSekected={value === number}
              onClick={() => handalenumberselector(value) }
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </Selectdiv>
    </>
  );
}

export default Selectnumber;
const Selectdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  h5 {
    margin-bottom: 20px;
    color: red;
    font-size: 18px;
    font-weight: 500;
  }

  div {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    margin-top: 15px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  color: #000;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${(props) => (props.isSekected ? "black" : "white")};
  color: ${(props) => (!props.isSekected ? "black" : "white")};
  cursor: pointer;
`;