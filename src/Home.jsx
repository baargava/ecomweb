import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import Services from '../src/Components/Services'
import Trusted from '../src/Components/Trusted'

const Home = () => {
  return (
    <>
<div className='container'>
  <div className='row'>
    <div className='col1'>
      <p style={{fontSize:'2em',marginBottom:'-0.5em'}}>Welcome to </p>
      <h1 className='navh1' style={{fontSize:'5.5em'}}>Store</h1>
      <NavLink to={'/products'}>
      <button className='hero-btn'>Shop Now</button>
      </NavLink>  
    </div>
    <div className='col2'>
<figure>
  <img src="../public/fam.jpg" alt="hero-sec-image" className='hero-sec-image' />
  </figure>      

    </div>

  </div>

</div>
<Services/>
<Trusted/>


    </>
  )
}

export default Home