import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';
import { getCountries, getCountriesFilter } from '../redux/action';
import Countrie from '../components/Countrie';

const CONTINENT = 'CONTINENT';
const ACTIVITY = 'ACTIVITY '; 
const OFF = 'OFF';

function Main() {
    const dispatch = useDispatch();
    const {countries, is_loading, countries_filter} = useSelector(state => state );
    const [typeFilter, setTypeFilter] = useState(OFF);
    const continents = ["North America", "South America", "Europe", "Oceania", "Africa", "Antarctica", "Asia"];

    useEffect(() => {
      dispatch(getCountries('ON'));
    }, [dispatch]);

    const getCountriesXContinent = (e) =>{
      const continent = e.target.value;
      dispatch(getCountriesFilter({typeFilter, selectInfo: continent}));

    }
    
    const setHandleFilter = () =>{
      if(typeFilter === OFF) return setTypeFilter(CONTINENT);
      if(typeFilter === CONTINENT) return setTypeFilter(ACTIVITY);
      return setTypeFilter(OFF);
    } 
    // console.log(`Filtrado : ${typeFilter}`,countries_filter)
    
    return (
      <div>

        <button onClick={setHandleFilter}>{typeFilter}</button>
        

        { typeFilter === CONTINENT &&
        <select name="" id="" onChange={getCountriesXContinent}>
          {/* <option value="">Selectionar Continente</option> */}
          {continents.map( (cont,i) => <option key={i} value={cont}>{cont}</option>)}
        </select>
        }

      {is_loading
      ? <Loading />
      :  (typeFilter === OFF ? countries : countries_filter).map( c => <Countrie key={c.id} {...c} />)
      // : countries.map( c => <Countrie key={c.id} {...c} />)
      }      
    </div>
  )
}

export default Main;

//* [ ] continente y por tipo de actividad turística
// [ ] ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
// [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.
