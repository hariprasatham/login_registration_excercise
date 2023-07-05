import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, updateData } from './redux/dataActions';

import RegistrationPage from './RegistrationPage';

import './App.css';
import LoginPage from './LoginPage';
import Table from './Table';


function App() {
 
  return (
    <div className="container">
      <h1>CRUD APP</h1>
    {/* <Table /> */}
    </div>
  );
}

export default App;
