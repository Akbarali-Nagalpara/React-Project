

import { useState } from 'react';
import './App.css'
import Playgame from './Components/Playgame';
import Startgame from './Components/Startgame';


function App() {

  const [startgame, setstartgame] = useState(false);
  
  const toggal = () => {
    setstartgame((prve) => !prve);
  }
  

  return (
    <>
      
      {!startgame ? <Startgame toggal={toggal}/>:<Playgame/>}


      
    </>
  );
}

export default App;

 
