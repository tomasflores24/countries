import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesName } from '../redux/action';
import '../styles/components/SearchName.css'

function SearchName() {
  const dispatch = useDispatch();
  const [countrieName, setCountrieName] = useState('');
  
  const handleCountrieName = (e) => {
    e.preventDefault();
    if(countrieName.length < 1) return alert("Empty")
    dispatch(getCountriesName(countrieName));
    document.getElementById('select_continent').selectedIndex = 0;
    document.getElementById('name_population').selectedIndex = 0;
    document.getElementById('select_order').selectedIndex = 0;
  }
  const onChangeCountrieName = (e) =>{
    if(/[0-9]+/gi.test(e.target.value) ) return 0;
    setCountrieName(e.target.value)
  }

  return (
    <form onSubmit={handleCountrieName} className='container__search__name'>
        <input type="text" placeholder='Name' id='input__name' value={countrieName} onChange={onChangeCountrieName} className='input__search' />
        <input type="submit" value='Buscar' className='btn__search' />
    </form>
  )
}

export default SearchName;