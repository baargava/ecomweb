import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context/ProductContext';
import {FilterContextProvider } from './Context/FilterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

        <BrowserRouter>
        <AppProvider>
<FilterContextProvider>
     <Header/>
      <App />
      </FilterContextProvider>
    </AppProvider>

    </BrowserRouter>
  </React.StrictMode>
)
