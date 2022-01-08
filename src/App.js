import React from 'react';
import './App.css';
import LogIn from './LogIn/LogIn';
import Main from './MainPage/Main';
import SignUp from './SignUp/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />} />
      </Routes>
      
    </Router>
      
    </>
  );
}

export default App;
