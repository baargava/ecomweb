import React from 'react'
 import { useProductContext } from './Context/ProductContext';
 import ProductList from './ProductList'
 import SortComponent from './SortComponent'
 import FilterComponent from './FilterComponent';
import { useFilterContext } from './Context/FilterContext';
import styled from 'styled-components'

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
const Wrapper=styled.section`
.grid-filter-column {
  grid-template-columns: 0.2fr 1fr;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-filter-column {
    grid-template-columns: 1fr;
  }
}
`

export default Products