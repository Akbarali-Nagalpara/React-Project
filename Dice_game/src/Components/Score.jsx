import React from 'react'
import styled from 'styled-components';

const Score = ({score}) => {
  return (
    <Scorediv>
      <div>
        <h1>{ score}</h1>
        <p>Total Score</p>
      </div>
    </Scorediv>
  );
}

export default Score;

const Scorediv = styled.div`
max-width: 200px;
text-align: center;

h1{
  font-size: 100px;
  font-weight: 600;
  line-height: 100px;
}
p{
  font-size:24px ;
  font: 500;
}

`;