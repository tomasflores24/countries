import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/pages/LandingPage.css'
import dyj from '../assets/dyj.png'
import NavBar from '../components/NavBar';

function LandingPage() {
    const divStyle = { color: 'red',fontSize:"xxx-large" };
 
  return (
    <>
      <NavBar />
      <div className='container__landing'>
          <Link to='/main' style={divStyle} className='link'>
            <img src={dyj} alt="dyj" className='dyj'/>
          </Link>
      </div>
    </>
  )
}

export default LandingPage;
