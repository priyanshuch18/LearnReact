// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react"

function App() {

  const [color, setColor] = useState('steelblue')

  
  

  return (
    <>
      <div className="container">
        <div className="content" style={{backgroundColor: `${color}`}}>
          <h4>{color}</h4>
        </div>
        <input type="text" 
        placeholder="Enter Color Name "
         value={color}
         onChange={(e) =>setColor(e.target.value)} onSubmit={(e)=>e.preventDefault}/>
      </div>
    </>
  )
}

export default App
