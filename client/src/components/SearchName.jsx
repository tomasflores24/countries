import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesName } from '../redux/action';

function SearchName() {
  const dispatch = useDispatch();
  const [countrieName, setCountrieName] = useState('');
  const handleCountrieName = (e) => {
    e.preventDefault();
    if(countrieName.length > 0){
      dispatch(getCountriesName(countrieName));
    }
  }
  const onChangeCountrieName = (e) =>{
    setCountrieName(e.target.value)
  } 

  return (
    <form onSubmit={handleCountrieName}>
        <input type="text" placeholder='Name' value={countrieName} onChange={onChangeCountrieName} />
        <input type="submit" value='Buscar' />
    </form>
  )
}

export default SearchName