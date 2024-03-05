import { useDispatch, useSelector } from "react-redux";
import { Istate } from "../../types/ISTATE";
import { removeFromCart } from "../../RTK/Slices/CartSlice";

export default function Cart() {
  const cart = useSelector((state: Istate) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col min-h-screen mt-12">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th> Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 ">
                      <img src={item.image} alt="" className="w-12 h-12" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.quantity}
                    </td>
                    <td>
                      {
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
