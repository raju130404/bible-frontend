import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Bible from './Pages/Bible';
import { VersePickerProvider } from './Contexts/versePickerContext';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/bible' element={<VersePickerProvider><Bible/></VersePickerProvider>}></Route>
    </Routes>
  );
}

export default App;
