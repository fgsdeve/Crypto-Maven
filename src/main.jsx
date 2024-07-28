import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  CoinContextProvide from './context/CoinContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    < CoinContextProvide>
    <App />
    </CoinContextProvide>
    </BrowserRouter>
  </React.StrictMode>,
)
