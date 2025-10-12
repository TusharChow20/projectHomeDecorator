import React from "react";
import { useDataload } from "../Hooks/useDataload";

const Cart = () => {
  const { data } = useDataload();
  const storedData =localStorage.getItem('getProduct')
  // const cartData = 

  return (
    <div>
      <h1>THis is Cart</h1>
    </div>
  );
};

export default Cart;
