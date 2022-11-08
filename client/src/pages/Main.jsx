import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loading';
import { getCountries } from '../redux/action';
import ListCountries from '../components/ListCountries';

function Main() {
    const dispatch = useDispatch();
    const {countries, is_loading} = useSelector(state => state );
 
    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);

    return (
    <div>
      {is_loading 
      ? <Loading />
      : <ListCountries countries={countries} /> 
      }      

    </div>
  )
}

export default Main
