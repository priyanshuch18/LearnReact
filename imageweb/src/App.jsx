// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState,useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";



function App() {

  const[items,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []


    // {

    //     id: 1,
    //     checked: true,
    //     item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    // },
    // {
    //     id: 2,
    //     checked: false,
    //     item: "Item 2"
    // },
    // {
    //     id: 3,
    //     checked: false,
    //     item: "Item 3"
    // }
  );

  
  const [search,setSearch] = useState('')
  const [newItem,setNewItem] = useState('')

  useEffect(() =>{
    console.log('updating item state')
    localStorage.setItem('shoppinglist',JSON.stringify(items));
  },[items])


  
  const addItem = (item) =>{
    const id = items.length ? items[items.length-1].id +1 : 1;
    const myNewItem = {id,checked: false,item}
    const listItems = [...items,myNewItem]
    setItems(listItems)
  }

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id ===id ? {...item, checked: !item.checked} : item);
      setItems(listItems)
  }


  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems)
      
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!newItem) return;
    // AddItem
    addItem(newItem);
    setNewItem('');

  
  }

  return (
    
      <div className="App">

        <Header title = 'Grocery List'/>

        <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}/>

        <SearchItem
        search = {search}
        setSearch = {setSearch}/>

        <Content
        items = {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>

        <Footer length = {items.length}/>
      </div>
    
  )
}


export default App
