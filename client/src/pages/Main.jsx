import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';
import {  getCountries, getCountriesFilter } from '../redux/action';
import Countrie from '../components/Countrie';
import '../styles/pages/Main.css'

const LENGTH = 10;

function Main() {
    // * 
    const dispatch = useDispatch();
    const { is_loading, countries_filter} = useSelector(state => state );
    const continentsArray = ["North America", "South America", "Europe", "Oceania", "Africa", "Antarctica", "Asia"];
    const [current, setCurrent] = useState(0);
    const [refresh, setRefresh] = useState(1);
    
    useEffect(() => dispatch(getCountries()), [dispatch, refresh]);
    
    const selectFilter = () =>{
      setCurrent(0);
      const order = document.getElementById('select_order').value;
      const continent = document.getElementById('select_continent').value;
      const nameOrPopulation = document.getElementById('name_population').value;
      dispatch(getCountriesFilter({continent, order, nameOrPopulation}));
    }
  
    const showContries = () => current === 0 ? countries_filter.slice(current, LENGTH - 1) : countries_filter.slice(current, current + LENGTH);
    const prev = () => setCurrent( a => current && a - LENGTH );
    const next = () => setCurrent( a => !countries_filter[a + LENGTH] ? a : a + LENGTH );
    
    const refreshPage = () =>{
      setRefresh(prev => prev + 1);
      document.getElementById('select_order').selectedIndex = 0;
      document.getElementById('select_continent').selectedIndex = 0;
      document.getElementById('name_population').selectedIndex = 0;
    } 

    if(is_loading) return <Loading />;

    return (
  <div className='container__main'>
    <NavBar inputSearch={true}/>

    <div className="container__select">
      <button onClick={refreshPage} className='btn__refresh'>Refresh</button>
      <select name="select_continent" id="select_continent" onChange={selectFilter}>
        <option value="ALL" defaultValue='ALL'>ALL</option>
        {continentsArray.map( (cont,i) => <option key={i} value={cont}>{cont}</option>)}
      </select>

      <select name="name_population" id="name_population"  onChange={selectFilter} >
        <option value="name" defaultValue='name'>name</option>
        <option value="population">population</option>
      </select>

      <select name="select_order" id="select_order" onChange={selectFilter}>
        <option value="ASC" defaultValue={"ASC"}>ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </div>
    <p className='length__countries'>Countries: {countries_filter.length}</p>
    <div className='container__countries'>{showContries().map( c => <Countrie key={c.id} {...c} />)}</div>

    <div className="btn__page">
      <button onClick={prev}> ← </button>
      <button onClick={() => next()}> → </button>
    </div>

  </div>
  )
}

export default Main;