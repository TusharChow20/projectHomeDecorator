import React from "react";
import { useLoaderData } from "react-router";
import Product from "./Component/Product";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-3xl">Featured Poducts</h1>
        <button className="btn rounded-xl">See ALl Products</button>
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
