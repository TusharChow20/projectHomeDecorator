import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      {data.map((d) => (
        <h1>{d.name}</h1>
      ))}
    </div>
  );
};

export default Home;
