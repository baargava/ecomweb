import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"; 
import reducer from '../Reducers/ProductReducer'


const AppContext = createContext();

const API=`https://fakestoreapi.com/products`

const initialState={
  isLoading:false,
  isError:false,
  products:[]
}

const AppProvider = ({ children }) => {
  const[state,dispatch]=useReducer(reducer,initialState)

  const getProducts=async(url)=>{
    dispatch({type:'SET_LOADING'})
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log(
        "🚀 ~ file: productcontex.js ~ line 18 ~ getProducts ~ products",
        products
      );
      dispatch({type:'SET_API_DATA',payload:products})
    } catch (error) {
      dispatch({type:'SET_ERROR'})
    }
  }
  useEffect(() => {
    getProducts(API);
  
    
  }, [])
  
  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };