import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import { AppContext } from './Context/ProductContext'
import { useProductContext } from './Context/ProductContext'
const About = () => {
  const{myName}=useProductContext();
  return (
    <>
<div className='container'>
  <div className='row'>
    <div className='col1'>
      <p style={{fontSize:'2em',marginBottom:'-0.5em'}}>Welcome to </p>
      <h1 style={{fontSize:'5.5em'}}>Store{myName}</h1>
       <p>World largest e-commerce store.here we provides large varities of appearals,groceries,hardware,software products</p>
    </div>
    <div className='col2'>
<figure>
  <img src="../public/fam.jpg" alt="hero-sec-image" className='hero-sec-image' />
  </figure>      

    </div>

  </div>

</div>


    </>
  )
}

export default About