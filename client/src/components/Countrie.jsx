import React from 'react'
import {Link} from 'react-router-dom'

function Countrie({id, name, continent, img}) {
  return (
    
    <div className='countrie__container'>
        <p>ID : {id}</p>
        <p>Name : {name}</p>
        <p>CXontinent : {continent}</p>
        <p>img : {img}</p>
        <Link to={`/detail/${id}`}>Ver detalle</Link>
        <hr />
    </div>
  )
}

export default Countrie