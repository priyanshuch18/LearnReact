import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
  
      <Route path="/" component={App} />

    </React.StrictMode>
  </Router>
  
    
  );