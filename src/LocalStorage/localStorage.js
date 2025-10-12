import Swal from "sweetalert2";

export const getStoredProduct = () => {
  const storedProductSTR = localStorage.getItem("getProduct");
  if (storedProductSTR) {
    const storedProduct = JSON.parse(storedProductSTR);
    return storedProduct;
  } else {
    return [];
  }
};

export const addToLocalStorage = (id) => {
  const storeProductData = getStoredProduct();
  if (storeProductData.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">You Have Added Once</a>',
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to The Cart.",
      showConfirmButton: false,
      timer: 1500,
    });
    storeProductData.push(id);
    const stringifyData = JSON.stringify(storeProductData);

    return localStorage.setItem("getProduct", stringifyData);
  }
};
