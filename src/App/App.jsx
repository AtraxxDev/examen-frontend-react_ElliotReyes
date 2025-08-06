import React from 'react';
import './App.css';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile';
import { LayoutLogin } from './Layouts/LayoutLogin/LayoutLogin';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (

    <div className="App">
      <Routes>
        <Route path='/' element={
        <LayoutLogin>
          <Login />
        </LayoutLogin>
      } />

      <Route path="/profile" element={<Profile />} />
      </Routes>
      

    </div>
  );
}

export default App;
