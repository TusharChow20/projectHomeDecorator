import React, { useEffect, useState } from "react";
import { useDataload } from "../Hooks/useDataload";
import { getStoredProduct } from "../LocalStorage/localStorage";
import CartDetails from "./CartDetails";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const { data, loading, error } = useDataload();
  // console.log(cartData);

  useEffect(() => {
    // if (!data || data.length === 0) return;
    const storedData = getStoredProduct();
    const storedEachData = storedData.map((id) => parseInt(id));
    // console.log(storedEachData);
    // console.log(data);

    const eachProduct = data.filter((product) =>
      storedEachData.includes(product.id)
    );
    // console.log(eachProduct);
    setCartData(eachProduct);
  }, [data]);
  // console.log(storedData);

  // const cartData =

  const handleRemoveCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Your existing remove logic
        // localStorage.removeItem("getProduct", id);
        const storedProducts =
          JSON.parse(localStorage.getItem("getProduct")) || [];
        const updatedProducts = storedProducts.filter(
          (itemId) => parseInt(itemId) !== parseInt(id)
        );
        localStorage.setItem("getProduct", JSON.stringify(updatedProducts));
        const updatedCart = cartData.filter((item) => item.id !== id);

        setCartData(updatedCart);

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="">
        {cartData.map((cartD) => (
          <CartDetails
            key={cartD.id}
            cartD={cartD}
            handleRemoveCart={handleRemoveCart}
          ></CartDetails>
        ))}
      </h1>
    </div>
  );
};

export default Cart;
 