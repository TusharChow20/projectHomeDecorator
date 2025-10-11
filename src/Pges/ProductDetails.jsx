import React from "react";
import { useParams } from "react-router";
import { useDataload } from "../Hooks/useDataload";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useDataload();
  const product = data.find((item) => parseInt(item.id) === parseInt(id));
  // console.log(product);
  if (loading) {
    return <p>Loading..</p>;
  }
  const { description, image, dimensions, material, name, price, stock } =
    product;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-60">
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
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
