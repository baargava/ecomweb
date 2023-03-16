import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context/ProductContext";
import Cart from "../src/Components/Cart"

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  console.log("id is",id);

  const {
    id: alias,
    title,
    price,
    description,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <section style={{margin:'10em'}}>
      <div key={id}>
        <div>{image}</div>
      </div>
     <Cart products={singleProduct}/>
    </section>
  );
};



export default SingleProduct;