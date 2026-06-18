import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Use CDN instead of importing Font Awesome to avoid issues
// import '@fortawesome/fontawesome-free/css/all.min.css'

console.log('🚀 App starting...');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)