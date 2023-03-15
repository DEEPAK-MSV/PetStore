import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cats from './Ani/Cats';
import Dogs from './Ani/Dogs';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Homepage}/>
        <Route path='/Dogs' element={Dogs}/>
        <Route path='/cats' element={Cats}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
