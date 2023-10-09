import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DetailCountry from './components/DetailCountry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/:id" element={<DetailCountry />}/>
    </Routes>

  </React.StrictMode>
   </Provider></BrowserRouter>
);

