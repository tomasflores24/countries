import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';
import { getCountries, getCountriesFilter } from '../redux/action';
import Countrie from '../components/Countrie';

function Main() {
    const dispatch = useDispatch();
    const {countries, is_loading, countries_filter} = useSelector(state => state );
    const continentsArray = ["North America", "South America", "Europe", "Oceania", "Africa", "Antarctica", "Asia"];


    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);

    const getCountriesXContinent = (e) =>{
      dispatch(getCountriesFilter( e.target.value ));
    }
    
    return (
      <div> 
        <select name="" id="" onChange={getCountriesXContinent} >
          <option value="ALL">ALL</option>
          {continentsArray.map( (cont,i) => <option key={i} value={cont}>{cont}</option>)}
        </select>


      <hr /><br /><br />

      {is_loading
      ? <Loading />
      :  countries_filter.map( c => <Countrie key={c.id} {...c} />)
      }      
    </div>
  )
}

export default Main;

//* [ ] continente y por tipo de actividad turística
// [ ] ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
// [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.
