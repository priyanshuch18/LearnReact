import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = React.createElement(
//   'a',
//   {href:'https//google.com',target:'_blank'},
//   'click me to visit the site'

// )


ReactDOM.createRoot(document.getElementById('root')).render(


  // reactElement
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
