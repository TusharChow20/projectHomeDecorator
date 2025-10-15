import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const CartDetails = ({ cartD, handleRemoveCart }) => {
  const info = useContext(AuthContext);
  console.log(info);

  const { id, description, image, name, price } = cartD;
  return (
    <div className="mt-4">
      <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure>
          <img
            className="w-40 h-40 object-cover md:w-60 md:h-60"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between md:justify-end flex items-center">
            <Link to={"/login"} className="btn ">
              Pay- {price}Tk
            </Link>
            <button
              onClick={() => handleRemoveCart(id)}
              className="btn bg-transparent"
            >
              <MdDelete size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
