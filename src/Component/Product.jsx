import React from "react";
import { Link } from "react-router";

const Product = ({ d }) => {
  const { id, description, image, dimensions, material, name, price, stock } =
    d;
  return (
    <div>
      <div className="card bg-base-100 image-full shadow-sm rounded-xl hover:scale-103 transition ease-in-out">
        <figure className="h-100 overflow-hidden">
          <img
            className=" flex w-full object-cover "
            src={image}
            alt="furniture"
          />
        </figure>
        <div className="card-body text-2xl border-2 border-amber-500 rounded-xl">
          <h2 className="card-title ">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <h1>Price- {price}tk.</h1>
            <Link to={`/product/${id}`} className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
