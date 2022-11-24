import React from 'react'
import '../styles/pages/LandingPage.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
    <NavBar />
    <div className='container__landing'>
      <button className='btn__landing'>
        <Link to='/main' className='btn__link__landing'>START</Link>
      </button>
    </div>
    </>
  )
}

export default LandingPage;
