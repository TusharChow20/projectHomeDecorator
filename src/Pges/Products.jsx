import React from "react";
import { useDataload } from "../Hooks/useDataload";

const Products = () => {
  const { data } = useDataload();
  return <div>{data.length}</div>;
};

export default Products;
