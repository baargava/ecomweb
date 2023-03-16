import React from 'react'
 import { useProductContext } from './Context/ProductContext';
 import ProductList from '../src/Components/ProductList'
 import SortComponent from '../src/Components/SortComponent'
 import FilterComponent from '../src/Components/FilterComponent';
import { useFilterContext } from './Context/FilterContext';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Products = () => {


  return (
    <>

<div className="product_container">
  <div className="grid-filter-column">
<FilterComponent/>
  </div>
  <div className="product_component--view">
    <div className="product-filter-view">
      <SortComponent/>
    </div>
    <div className="product-list">
      <ProductList/>
    </div>
  </div>
</div>

    </>
  )
}



export default Products