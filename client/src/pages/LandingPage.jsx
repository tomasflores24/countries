import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/pages/LandingPage.css'
import dyj from '../assets/dyj.png'

function LandingPage() {
    const divStyle = { color: 'red',fontSize:"xxx-large" };

  return (
    <div className='container__landing'>
        <Link to='/main' style={divStyle} className='link'>
          <img src={dyj} alt="dyj" className='dyj'/>
        </Link>
    </div>
  )
}

export default LandingPage;
