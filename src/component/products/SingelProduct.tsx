import { TERipple } from "tw-elements-react";
import IProduct from "../../types/IProduct";
import "./singel.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../RTK/Slices/CartSlice";

export default function SinglProduct({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  return (
    <div className="block mb-4 card-parent    w-1/4 mr-3  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:bg-neutral-700  hover:scale-110 hover:mt-5 hover:mb-5  duration-300 transition-transform hover:shadow-emerald-400   ">
      <TERipple className=" w-full">
        <div className="flex justify-center items-end ">
          <img
            className="rounded-t-lg h-24 w-24 card-img-top"
            src={product.image}
            alt=""
          />
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 card-title text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {product.title}
        </h5>
        <p className="mb-4 card-text text-base text-neutral-600 dark:text-neutral-200">
          {product.description}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="inline-block mr-6 rounded-full border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-600 hover:text-white"
        >
          addToCart
        </button>
        <button className="inline-block rounded-full border-2 border-info px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-info-600 hover:text-white ">
          <Link to={`/product/${product.id}`}>DEtails</Link>
        </button>
      </div>
    </div>
  );
}
