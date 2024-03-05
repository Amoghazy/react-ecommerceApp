import Pagination from "./Pagination";
import { useQuery } from "react-query";
import axios from "axios";
import IProduct from "../../types/IProduct";
import SinglProduct from "./SingelProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../RTK/Slices/ProductsSlice";
import { useState } from "react";

export default function Products() {
 

  const [page, setPage] = useState(1);
  const products = useSelector(
    (state: { token: string; products: IProduct[] }) => state.products
  );
  const dispatch = useDispatch();
  const fetchProduct = () => {
    return axios.get("https://fakestoreapi.com/products");
  };

  const { isLoading, isError } = useQuery("products", fetchProduct, {
    onSuccess: (res) => {
      dispatch(getAllProducts(res.data));
      console.log("fetch");
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <>
        <div className="justify-center min-h-screen items-center flex">
          Loading...
          <div
            className="inline-block  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      </>
    );
  if (isError) return <div>Error</div>;
  const productPerPage = 6;
  const previousData = page * productPerPage;
  const dataFirst = previousData - productPerPage;

  const productsToShow = products.slice(dataFirst, previousData);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Products</h1>
      <div className="container min-h-screen  m-auto flex  flex-wrap justify-around my-5">
        {productsToShow.map((product: IProduct) => (
          <SinglProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        <Pagination
          page={page}
          productPerPage={productPerPage}
          setPage={setPage}
          total={products.length}
        />
      </div>
    </>
  );
}
