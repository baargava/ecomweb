import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view:true,
  sorting_value:"lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  
const setGridView=()=>{
  dispatch({type:"SET_GRID_VIEW"})
}
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};