// import React from 'react'

function Header({ title }) {
    return (
        <header><h1 className="font-bold text-2xl">{title}</h1></header>
    )
}
Header.defaultProps = {
    title: "Default Title"
  }

export default Header
