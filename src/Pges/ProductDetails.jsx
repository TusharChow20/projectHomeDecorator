import React from "react";
import { Link, useParams } from "react-router";
import { useDataload } from "../Hooks/useDataload";
import { addToLocalStorage } from "../LocalStorage/localStorage";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useDataload();
  const product = data.find((item) => parseInt(item.id) === parseInt(id));
  // console.log(product);
  if (loading) {
    return <p>Loading..</p>;
  }
  const { description, image, dimensions, material, name, price } = product;
  const handleLocalStorage = (id) => {
    addToLocalStorage(id);
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-60 mx-auto">
          <img className="w-full object-cover" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Description: {description}</p>
          <p>Dimensions: {dimensions}</p>
          <p>Material- {material}</p>
          {/* <button className="btn">{stock}</button> */}
          <div className="card-actions items-center justify-end">
            <p>Price: {price} tk.</p>
            <button onClick={() => handleLocalStorage(id)} className="btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <Link to={"/cart"} className="btn w-full md:w-1/3 mx-auto">
          Go To Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
