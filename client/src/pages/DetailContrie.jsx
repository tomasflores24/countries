import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { clearDetail, getCountrieId } from '../redux/action';
import NavBar from '../components/NavBar';

function DetailContrie() { 

    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const {countrie_detail, is_loading} = useSelector( state => state);
    
    useEffect(() => {
        dispatch(clearDetail());
        dispatch(getCountrieId(id));
    }, [dispatch, id]);

    // console.log("DETAIL=> ",countrie_detail)
    return (
      <>
        <NavBar />
        <div>
          { is_loading
          ? <Loading /> 
          : (
            <div>
              <p>{countrie_detail.id}</p>
              <p>{countrie_detail.name}</p>
              <p>cap {countrie_detail.capital}</p>
              <p>conti {countrie_detail.continent}</p>
              <p>img {countrie_detail.img}</p>
              <p>popu {countrie_detail.population}</p>
              <p>sub reg {countrie_detail.subregion}</p>
              <p>AREA {countrie_detail.area}</p>
              <p>Actividades turísticas con toda su información asociada!!!!!!!!!!!!!!</p>
              {/* Actividades turísticas con toda su información asociada */}
            </div>)
          }
          </div>
      </>
  )
}

export default DetailContrie
