const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr=action.payload.map((curElem)=>curElem.price)
let maxPrice=Math.max(...priceArr)
console.log(maxPrice);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
         filters:  {...state.filters, maxPrice ,price:maxPrice}
      };

      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
      case "SET_LIST_VIEW":
        return{
          ...state,
          grid_view:false,
        }
      case "GET_SORT_VALUE":
         // const user_sort_value=document.getElementById("sort");
         // const sort_value=user_sort_value.options[user_sort_value.selectedIndex].value;
          return{
            ...state,
            sorting_value:action.payload,
          }
     case "SORTING_PRODUCTS":
      let newSortData;
      //let tempSortData=[...action.payload]
      const{filter_products,sorting_value}=state;
      let tempSortData=[...filter_products]

      const sortingProducts=(a,b)=>{
        if (sorting_value==="a-z"){
          return a.title.localeCompare(b.title)
        }
        if (sorting_value==="lowest") {
          return a.price-b.price

      }
      if (sorting_value==="highest") {
        return b.price-a.price
      }
       
      if (sorting_value==="z-a") {
          return b.title.localeCompare(a.title)
        }
      }
      newSortData=tempSortData.sort(sortingProducts)
      
       return{
        ...state,
        filter_products:newSortData,
       }

       case "UPDATE_FILTER_VALUE":
        const{name,value}=action.payload;
        return{
          ...state,
          filters:{
            ...state.filters,
            [name]:value
          }
        }
       case "FILTER_PRODUCTS":
        let {all_products}=state;
        let tempFilterProducts=[...all_products];
        const {text,category,price}=state.filters;
        console.log(text);
        if (text) {
          tempFilterProducts=tempFilterProducts.filter((curelem)=>{
            return curelem.title.toLowerCase().includes(text)
          })
        }
        if(category !=="all"){
          tempFilterProducts=tempFilterProducts.filter((curElem)=>{
            return curElem.category===category
          })
        }
        if (price === 0) {
          tempFilterProducts = tempFilterProducts.filter(
            (curElem) => curElem.price == price
          );
        } else {
          tempFilterProducts = tempFilterProducts.filter(
            (curElem) => curElem.price <= price
          );
        } 
     return{
      ...state,
      filter_products:tempFilterProducts
     }
     case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          maxPrice: state.filters.maxPrice,
          price:    state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;