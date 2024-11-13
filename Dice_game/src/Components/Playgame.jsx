import React, { useState } from 'react'
import Score from './Score'
import Selectnumber from './Selectnumber'
import styled from 'styled-components'
import Roledice from './Roledice'

const Playgame = () => {

 
  const [score,setscore] = useState(0)
  const [number, setnumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error,seterror] = useState()

  const generaterandomnumber = (min, max) => {
    
    return Math.floor(Math.random() * (max - min) + min);
  };



  const resetscore = () => {
    setscore(0)
  }


  const rolldice = (e) => {


      if (!number) {
        seterror("Please Select The Number");
        return;
      }
      seterror("");




    let randomnumber = generaterandomnumber(1, 7); 0
    console.log(randomnumber);
    
    setcurrentdice((prev)=> randomnumber);
    
    {/*setcurrentdice( randomnumber);*/ }
    
  

    if (number === randomnumber) {
      setscore( (prev) => prev + randomnumber)
    }
    else {
      setscore((prev)=> prev -2)
    }
    setnumber('')

  };









  return (
    <Playcontainer>
      <div className="scorepart">
        <Score score={score} />
        <Selectnumber
          number={number}
          setnumber={setnumber}
          error={error}
          seterror={seterror}
        />
      </div>

      <Roledice
        currentdice={currentdice}
        rolldice={rolldice}
        resetscore={resetscore}
      />
    </Playcontainer>
  );
}

export default Playgame;

const Playcontainer = styled.div`

.scorepart{
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-top: 25px;
}
`;