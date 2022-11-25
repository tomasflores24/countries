import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar'
import { getActivities } from '../redux/action';
import '../styles/pages/Activities.css'

function Activities() {
    const dispatch = useDispatch();
    const {activities} = useSelector( state => state);
    useEffect(() => dispatch( getActivities() ) , [dispatch]);
  
return (
    <>
    <NavBar />
    <div className='activities__detail__container'>
        {!activities.length 
        ? <p>No hay actividades</p>
        : activities.map( a => (
        <div key={a.id} className='activity__detail'>
            <h3>{a.name}</h3>
            <div className='info__activity'>
                <div className='inf'>
                    <p>difficulty</p>
                    <p className='txt__bold'>{a.difficulty}/5</p>
                </div>
                <div className='inf'>
                    <p>duration</p>
                    <p className='txt__bold'>{a.duration}hs</p>
                </div>
                <div className='inf'>
                    <p>Season</p> 
                    <p className='txt__bold'>{a.season}</p>
                </div>
            </div>
            
            <div className="container__countries__detail">
                {a.countries.map( (c,i) => <img key={i} src={c.img} alt="img activities" className='img__activities'/>)}
            </div>

        </div>
        ))}
    </div>
    </>
  )
}

export default Activities