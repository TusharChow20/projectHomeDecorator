import { createBrowserRouter } from "react-router";
import Home from "../Home";
import Products from "../Pges/Products";
import MainLayOut from "../MainLayOut/MainLayOut";
import Error from "../Pges/Error";
import Wishlist from "../Pges/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
    ],
  },
  //   {
  //     path: "*",
  //     Component: Error,
  //   },
]);
