import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar'
import { getActivities } from '../redux/action';

function Activities() {

    const dispatch = useDispatch();
    const {activities} = useSelector( state => state);

    useEffect(() => {
        dispatch( getActivities() );
    }, [dispatch]);
    console.log("ACTIVIDADES =>",activities)
  return (
    <>
        <NavBar />
        <div>
            {activities.map( a => (
                <div>
                    <p>name : {a.name}</p>
                    <p>difficulty :{a.difficulty}</p>
                    <p>duration : {a.duration}</p>
                    <p>id : {a.id}</p>
                    <p>summer : {a.summer}</p>
                    <br />

                    {a.countries.map( c => (
                        <div>
                            <p>{c.name}</p>
                            {/* <p>{c.id}</p> */}
                            {/* <p>{c.img}</p> */}
                        </div>
                    ))}
                    <hr />
                </div>
            ))}
        </div>
    </>
  )
}
// countries [{…}, {…}]
// difficulty1
// duration: "3"
//  1
// name "nadar con tiburones 1"
// season "summer"

export default Activities