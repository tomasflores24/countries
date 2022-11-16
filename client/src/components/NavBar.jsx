import React from 'react'
import {NavLink} from 'react-router-dom'
import SearchName from './SearchName'
import '../styles/components/NavBar.css'

function NavBar({inputSearch}) {
  return (
    <div className='navbar__container'>
      <NavLink to='/' className={ nav => nav.isActive ? "nav-active" : "tr"}>Landing</NavLink>
      <NavLink to='/main' className={ nav => nav.isActive ? "nav-active" : "tr"}>Main</NavLink>
        
      {inputSearch && <SearchName />}

      <NavLink to='/activities' className={ nav => nav.isActive ? "nav-active" : "tr"}>Activities</NavLink>        
      <NavLink to='/create' className={ nav => nav.isActive ? "nav-active" : "tr"}>Create</NavLink>

    </div>
  )
}

export default NavBar
