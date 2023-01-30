
/* import './App.css';  */
import IndexPage from './indexPage';
import { useState } from 'react';
import HomePage from './homePage/homepage';

function App() {

  const [page, setPage] = useState('IndexPage')

  const handleClick = () =>{
    
    page === 'IndexPage' ? setPage('HomePage') : setPage('IndexPage')
    
  }

  return (
    <>
      {
        page === 'IndexPage' ?
          <IndexPage handleClick={handleClick} />
          :
          <HomePage />
      }

    </>
  );
}

export default App;
