import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import App from './App';

import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import Table from './Table';

import { store } from './redux/store'


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/table" element={<Table />}/>
    </Routes>
    </BrowserRouter>
  </Provider>,
);
