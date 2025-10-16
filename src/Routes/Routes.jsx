import { createBrowserRouter } from "react-router";
import Home from "../Home";
import Products from "../Pges/Products";
import MainLayOut from "../MainLayOut/MainLayOut";
import Error from "../Pges/Error";
import Cart from "../Pges/Cart";
import ProductDetails from "../Pges/ProductDetails";
import Login from "../Pges/Login";
import Payment from "../Pges/Payment";
import LoginForm from "../Pges/LoginForm";
import Orders from "../Pges/Orders";
// import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/payment",
        Component: Payment,
      },
      {
        path: "/loginForm",
        Component: LoginForm,
      },
      {
        path: "/orders",
        Component: Orders,
      },
    ],
  },
  //   {
  //     path: "*",
  //     Component: Error,
  //   },
]);
