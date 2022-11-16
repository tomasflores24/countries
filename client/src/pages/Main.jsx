import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';
import {  getCountries, getCountriesFilter } from '../redux/action';
import Countrie from '../components/Countrie';
const LENGTH = 10;
 

function Main() {
    const dispatch = useDispatch();
    const { is_loading, countries_filter, activities} = useSelector(state => state );
    const continentsArray = ["North America", "South America", "Europe", "Oceania", "Africa", "Antarctica", "Asia"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      dispatch(getCountries());
      // Fijarse si tengo que hacer el distpach de getActivities();
    }, [dispatch]);
    // console.log("ACTIVITIES MAIN", activities);

    const selectFilter = () =>{
      const order = document.getElementById('select_order').value;
      const continent = document.getElementById('select_continent').value;
      const nameOrPopulation = document.getElementById('name_population').value;
      dispatch(getCountriesFilter({continent, order, nameOrPopulation}));
    }

    const showContries = () => current === 0 ? countries_filter.slice(current, LENGTH - 1) : countries_filter.slice(current, current + LENGTH);
    const prev = () => setCurrent( a => current && a - LENGTH );
    const next = () => setCurrent( a => !countries_filter[a + LENGTH] ? a : a + LENGTH );

    return (
      <div>
        <NavBar inputSearch={true}/>
        <p>LENGTH : {countries_filter.length}</p>
        <select name="select_continent" id="select_continent" onChange={selectFilter} >
          <option value="ALL" defaultValue='ALL'>ALL</option>
          {continentsArray.map( (cont,i) => <option key={i} value={cont}>{cont}</option>)}
        </select>

        <select name="name_population" id="name_population"  onChange={selectFilter}>
          <option value="name" defaultValue='name'>name</option>
          <option value="population">population</option>
        </select>

        <select name="select_order" id="select_order" onChange={selectFilter}>
          <option value="ASC" defaultValue={"ASC"}>ASC</option>
          <option value="DESC">DESC</option>
        </select>

        <hr />
        <button onClick={prev}>PREV</button>
        <button onClick={() => next()}>NEXT</button>
      <hr /><br /><br />


      {is_loading
      ? <Loading />
      : showContries().map( c => <Countrie key={c.id} {...c} />)
      }
    </div>
  )
}

export default Main;

//? [ ] ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
//* [ ]  tipo de actividad turística