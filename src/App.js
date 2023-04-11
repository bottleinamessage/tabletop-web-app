import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PlayerForm } from './PlayerForm';
import { PlayerList } from './PlayerList';
import { HomePage, GamePage ,NotFoundPage } from './pages';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

function App() {




  return (
    // Wrap ChakraProvier at root of app for ChakraUI CSS styling
    // path='*' <---- Any page not specified redirects to 404 Not Found Page using * wildcard
    <ChakraProvider>
      <div className="App">
        <Router>
          <div className='App-header'>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='*' element={<NotFoundPage />} />
              <Route exact path='/game' element={<GamePage />}></Route>
            </Routes>
          </div>
        </Router>


      </div>
    </ChakraProvider>

  );
}

export default App;
