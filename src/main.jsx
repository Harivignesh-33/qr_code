import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Qrcode.css"
import {Qrcode} from './Qrcode.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Qrcode />
  </React.StrictMode>,
)
