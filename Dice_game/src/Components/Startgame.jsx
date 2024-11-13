import React from 'react'
import styled from "styled-components";
import {Button} from './Button';

const Startgame = ({toggal}) => {
  return (
    <>
      <Container>
        <div className="dicepart">
          <div>
            <img src="dices 1.png" alt="Dice Image" />
          </div>
          <div className="f-part">
            <h1>DICE GAME</h1>
            <div className="btn">
              {/* <button onClick={toggal}>Play Now</button> */}
             <Button onClick={toggal}>play now</Button>

            </div>

          </div>
        </div>
      </Container>
    </>
  );
}

export default Startgame;

const Container = styled.div`
  max-width: 1182px;
  margin: 0 auto;

  .dicepart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }

  .dicepart .f-part {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    .btn{
      display: flex;
      justify-content: end;
      margin-top: 20px;
    } 
    
  }
`;