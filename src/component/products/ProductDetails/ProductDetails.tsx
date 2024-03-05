import { useDispatch, useSelector } from "react-redux";
import { Params, useParams } from "react-router-dom";
import { Istate } from "../../../types/ISTATE";
import { addToCart } from "../../../RTK/Slices/CartSlice";

export default function ProductDetails() {
  const products = useSelector((state: Istate) => state.products);
  const dispatch = useDispatch();
  const { id }: Readonly<Params<string>> = useParams();
  const product = products.find((product) => product.id === +id!);
  return (
    <>
      <div className="container min-h-screen  flex justify-between p-10">
        <div className="w-1/2 bg-slate-600 h-96 flex justify-center items-center">
          <img className="w-2/3 h-2/3" src={product?.image} alt=" " />
        </div>
        <div className="w-2/5 h-96 flex flex-col justify-between ">
          <h1 className="text-wrap   text-lg font-bold ">{product?.title}</h1>
          <p className="  font-bold ">{product?.price}$</p>
          <p className="text-wrap  text-sm  ">{product?.description}</p>
          <p>rating : {product?.rating.rate}</p>
          <button
            onClick={() => dispatch(addToCart(product!))}
            className="relative block rounded bg-info px-3 py-1.5 text-sm text-white-600 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
