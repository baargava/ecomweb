import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import Products from './Products'
import Error from './Error'
import Header from './Header'
import Login from './Login'
import './App.css'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <Routes>  
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/single/:id' element={<SingleProduct/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App