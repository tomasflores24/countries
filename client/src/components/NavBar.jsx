import React from 'react'
import {NavLink} from 'react-router-dom'
import SearchName from './SearchName'
import '../styles/components/NavBar.css'

function NavBar() {
  return (
    <div className='navbar__container'>
        <NavLink to='/' className={ nav => nav.isActive ? "nav-active" : "tr"}>Landing</NavLink>
        <NavLink to='/main' className={ nav => nav.isActive ? "nav-active" : "tr"}>Main</NavLink>

        <SearchName />
        <NavLink to='create' className={ nav => nav.isActive ? "nav-active" : "tr"}>Create</NavLink>        
    </div>
  )
}

export default NavBar
