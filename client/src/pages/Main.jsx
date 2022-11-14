import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';
import { getCountries, getCountriesFilter } from '../redux/action';
import Countrie from '../components/Countrie';
const LENGTH = 10;

function Main() {
    const dispatch = useDispatch();
    const { is_loading, countries_filter} = useSelector(state => state );
    const continentsArray = ["North America", "South America", "Europe", "Oceania", "Africa", "Antarctica", "Asia"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);

    const getCountriesXContinent = (e) => {
      setCurrent(0);
      dispatch(getCountriesFilter( e.target.value ));
    }

    const getCountriesXPopulation = (e) =>{
      // console.log(e.target.value)
      dispatch(getCountriesFilter(e.target.value))
    } 

    const showContries = () => current === 0 ? countries_filter.slice(current, LENGTH - 1) : countries_filter.slice(current, current + LENGTH);
    
    const prev = () => setCurrent( a => current && a - LENGTH );
    const next = () => setCurrent( a => !countries_filter[a + LENGTH] ? a : a + LENGTH );

    return (
      <div> 
        <select name="" id="" onChange={getCountriesXContinent} >
          <option value="ALL">ALL</option>
          {continentsArray.map( (cont,i) => <option key={i} value={cont}>{cont}</option>)}
        </select>

        <select name="" id="" onChange={getCountriesXPopulation}>
          <option value="">Selecionar</option>
          <option value="population">population</option>
          <option value="activity">activity</option>
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