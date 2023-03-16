import React from 'react'
import { useFilterContext } from '../Context/FilterContext'

const FilterComponent = () => {
  const{ filters:{text,category,price,maxPrice,minPrice},updateFilterValue,all_products,clearFilters}=useFilterContext();

  //to get the unique data
  const  getUniqueData=(data,property)=>{
let newVal=data.map((curElem)=>{
  return curElem[property]
})
return(newVal=["all",...new Set(newVal)]);
  }
  const categoryOnlyData=getUniqueData(all_products,'category');
  return (
    <div>
    <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className='category-filter'>
        <h3>Category</h3>
       {
        categoryOnlyData.map((curElem,id)=>{
          return (
            <button 
            key={id}
            type='button'
            name="category"
            value={curElem}
            onClick={updateFilterValue}
            >
{curElem}
            </button>
          )
        })
       }
      </div>
      <div className='price-range'>
         <h6>{price}</h6>
         <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

<div>
  <button type="button" onClick={clearFilters}>Clear Filters</button>
</div>
    </div>
  )
}

export default FilterComponent