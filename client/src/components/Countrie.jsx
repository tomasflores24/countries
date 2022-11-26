import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Countrie.css'


function Countrie({id, name, continent, img, population}) {  
  return (
    
    <div className='countrie__container'>
        <h3>{name}</h3>
        <img src={img} alt="countrie" className='img__countrie' />
        <p>{continent}</p>
        <p className='pupulation__countrie'>Population : {population}</p> 

        <Link to={`/detail/${id}`} className='link__detail link__def'>Ver detalle</Link>
    </div>
  )
}

export default Countrie