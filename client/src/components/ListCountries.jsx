import React from 'react'
import Countrie from './Countrie'

function ListCountries({countries}) {
  
  return (
    <div className='list__container'>
      {countries.map( c => <Countrie key={c.id} {...c} />)}
    </div>
  )
}

export default ListCountries
