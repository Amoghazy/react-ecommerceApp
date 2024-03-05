import { createBrowserRouter } from "react-router-dom";
import LayoutUser from "./component/LayoutUser/LayoutUser";
import Login from "./component/User/Login/Login";
import ForgetPassword from "./component/User/Login/ForgetPassword";
import Register from "./component/User/Registration/Registration";
import PassWordChange from "./component/User/PassWordChange";
import Home from "./component/Home/Home";
import Products from "./component/products/Products";
import ProductDetails from "./component/products/ProductDetails/ProductDetails";
import NotFound from "./component/NotFound/NotFound";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import Gurd from "./Gurd/Gurd";

export const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutUser />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <Gurd>
            <Profile />{" "}
          </Gurd>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "products",
        element: (
          <Gurd>
            <Products />
          </Gurd>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: (
          <Gurd>
            <ProductDetails />
          </Gurd>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/passwordchanged",
    element: <PassWordChange />,
  },
]);
