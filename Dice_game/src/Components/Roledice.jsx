
import styled from 'styled-components';
import { Button, Outlinebutton } from './Button';

const Roledice = ({ currentdice, rolldice , resetscore  }) => {
  return (
    <Dicecontainer>
      <div className="diceimg" onClick={rolldice}>
        <img src={`dice_${currentdice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
      <div className="rolldicebtn">
        <Button onClick={resetscore}>Reset Score</Button>
        <Outlinebutton>Show Rules</Outlinebutton>
      </div>
    </Dicecontainer>
  );
};

export default Roledice;

const Dicecontainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;

.diceimg img{
  max-width: 200px;
  cursor: pointer;
}
p{
  font-size: 20px;
  font-weight: 500;
}
.rolldicebtn{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
}
`;