import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Cart from './Components/Cart'
import SingleProduct from './SingleProduct'
import Products from './Products'
import Error from './Error'
import Header from './Header'
import Login from '../src/Components/Login'
import './App.css'
import Footer from '../src/Components/Footer'

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