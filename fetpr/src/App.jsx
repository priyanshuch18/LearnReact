import { useEffect, useState } from "react"
import Form from "./Form"
import List from "./List"
import Table from "./Table"


function App() {


  const API_URL = 'https://jsonplaceholder.typicode.com/'
  // const userUrl = `${API_URL}/users`
  const [reqType,setReqType] = useState('users')

  const[user,setUser] = useState([])


useEffect(()=>{
  const fetchItems = async()=>{
    try{
      const response = await fetch(`${API_URL}${reqType}`)
      if(!response.ok) throw Error('expected data not found')
      const data = await response.json()
      console.log(data)
        
        
      setUser(data)

    }catch(err){
      console.log(err)
  }

  }

 fetchItems();
},[reqType])


  

  return (
    <>
    



    <div className="App">
      
      <Form reqType = {reqType} setReqType = {setReqType}/>
      {/* <List user = {user}/> */}
      <Table user={user} />
        
          
              
        
      
    </div>
      
    </>
  )
}

export default App
