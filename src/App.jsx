
/* import './App.css';  */
import IndexPage from './indexPage';
import { useState } from 'react';
import HomePage from './homePage/homepage';

function App() {

  const [isIndex, setIsIndex] = useState(true)

  const handleClick = () =>{
    
    setIsIndex(!isIndex)
    
  }

  return (
    <>
      {
        isIndex ?
          <IndexPage handleClick={handleClick} />
          :
          <HomePage  handleClick={handleClick}/>
      }

    </>
  );
}

export default App;
