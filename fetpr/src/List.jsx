// import React from 'react'
import ListItem from "./ListItem"

const List = ({user}) => {
  return (
    <ul>
        {user.map((use) =>(
            <ListItem key={use.id} use = {use}/>
        ))}
    </ul>
  )
}

export default List
