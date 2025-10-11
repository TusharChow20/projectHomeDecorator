import { createBrowserRouter } from "react-router";
import Home from "../Home";
import Products from "../Pges/Products";
import MainLayOut from "../MainLayOut/MainLayOut";
import Error from "../Pges/Error";
import Wishlist from "../Pges/Wishlist";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => axios("/furnitureData.json"),
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
