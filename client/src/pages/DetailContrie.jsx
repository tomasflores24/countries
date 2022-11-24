import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { clearDetail, getCountrieId } from '../redux/action';
import NavBar from '../components/NavBar';
import '../styles/pages/DetailContrie.css';

function DetailContrie() { 
    const {id} = useParams();
    const dispatch = useDispatch();
    const {countrie_detail, is_loading} = useSelector( state => state);

    useEffect(() => {
        dispatch(clearDetail());
        dispatch(getCountrieId(id));
    }, [dispatch, id]);

    if(!countrie_detail) return <h1 className='void__detail'>Not found because</h1>
    
    return (
<>
<NavBar />
<div className='container__detail__page'>
  { is_loading
  ? <Loading /> 
    : (
    <div className='countrie__detail__container'>
      <h2 className='name__detail'>{countrie_detail.name}</h2>
      <img className='img__detail' src={countrie_detail.img} alt="countrie detail" />
      <div className='info__detail_container'>
        <p className='capital__detail info'>Capital: <span className='txt__bold'>{countrie_detail.capital}</span></p>
        <p className='continent__detaile info'>Continent: <span className='txt__bold'>{countrie_detail.continent}</span></p>
        <p className='population__detail info'>Population: <span className='txt__bold'>{countrie_detail.population}</span></p>
        <p className='subregion__detail info'>Sub Region: <span className='txt__bold'>{countrie_detail.subregion === null ? 'Has no subregion' : countrie_detail.subregion}</span></p>
        <p className='area__detail info'>Area: <span className='txt__bold'>{countrie_detail.area}km²</span></p>
      </div>

      <h3 className='title__activities'>Activities</h3>
      <div className="container__activities">
        {countrie_detail.activities && countrie_detail.activities.length 
        ? countrie_detail.activities.map( a => (
        <div className='container__activity' key={a.id}>
          <h4>{a.name}</h4>
          <p>Difficulty: <span>{a.difficulty}/5</span></p>
          <p>Duration: <span>{a.duration}hs</span></p>
          <p>Season: <span>{a.season}</span></p>
        </div>)) 
        : <p>No hay actividades</p>
      }

      </div>
    </div>  
    )}
  </div>
  </>
  )
}

export default DetailContrie
