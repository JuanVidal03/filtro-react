import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// importar contexto
import InputContextProvider from './context/InputContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InputContextProvider>
      <App />
    </InputContextProvider>
  </React.StrictMode>,
)
