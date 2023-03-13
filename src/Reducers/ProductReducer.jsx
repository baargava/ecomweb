
const ProductReducer=(state,action)=>{
 switch (action.type) {
  case 'SET_LOADING':
    return{
      ...state,
      isLoading:true
    }
    case 'SET_API_DATA':
      return{
        ...state,
        isLoading:false,
        products:action.payload
      }
 case 'SET_ERROR':
  return{
    ...state,
    isError:true,
    isLoading:false
  } 
  default:
return state;
 }
}
export default ProductReducer;