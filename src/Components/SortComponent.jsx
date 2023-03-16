import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../Context/FilterContext'
import GridViewIcon from '@mui/icons-material/GridView';
import ReorderIcon from '@mui/icons-material/Reorder';

const SortComponent = () => {
  const{filter_products,setGridView,setListView,grid_view,sorting}=useFilterContext()
  return (
    <Wrapper>
      <div className='sorting-list--grid'>
        <button className={grid_view ? "active sort-btn":"sort-btn"}
         onClick={setGridView}><GridViewIcon className='icon'/></button>
        <button className={!grid_view ? "active sort-btn":"sort-btn"}
         onClick={setListView}><ReorderIcon className='icon'/></button>
      </div>
      <div className='product_data'>

<h6>{`${filter_products.length} Product Available`}</h6>   
   </div>
      <div className='sort_selection'>
        <form action='#'>
          <label htmlFor='sort'></label>
        <select name="sort" id="sort" onClick={sorting}>
          <option value="lowest">Price(Lowest)</option>
          <option value="#"></option>
          <option value="highest">Price(Highest)</option>
          <option value="#"></option>

          <option value="a-z">Price(a-z)</option>
          <option value="#"></option>

          <option value="z-a">Price(z-a)</option>

        </select>
        
        </form>
      </div>

    </Wrapper>
  )
}
const Wrapper=styled.section`
   display:flex;
   justify-content:space-around;
   margin-top:1em;

   .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.5rem 0.5rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1rem;
    }
    .active {
      background-color:black;
      color: #fff;
    }
  }

`;


export default SortComponent