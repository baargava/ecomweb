import React from 'react'
import GridView from './Components/GridView'
import ListView from './Components/ListView'
import { useFilterContext } from './Context/FilterContext'

const ProductList = () => {
  const{filter_products,grid_view}=useFilterContext();
  if (grid_view===true) {
    return <GridView products={filter_products}/>
  }
  if (grid_view===false) {
    return <ListView  products={filter_products}/>
  }
}

export default ProductList