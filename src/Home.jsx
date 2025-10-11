import React from "react";
import Product from "./Component/Product";
import { useDataload } from "./Hooks/useDataload";
import { Link } from "react-router";

const Home = () => {
  // const { data } = useLoaderData();
  const { data, loading, error } = useDataload();
  // console.log(data);

  return (
    <div>
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl">Featured Poducts</h1>
        <Link to={"/products"} className="btn rounded-xl">
          See ALl Products
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {data.slice(4, 10).map((d) => (
          <Product key={d.id} d={d}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
