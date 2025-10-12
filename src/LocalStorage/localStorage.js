const getStoredProduct = () => {
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
    alert("id exits");
  } else {
    storeProductData.push(id);
    const stringifyData = JSON.stringify(storeProductData);

    return localStorage.setItem("getProduct", stringifyData);
  }
};
