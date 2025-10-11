import React, { useState } from "react";
import { useDataload } from "../Hooks/useDataload";
import Product from "../Component/Product";
import { Link } from "react-router";

const Products = () => {
  const { data } = useDataload();

  const [search, setSearch] = useState("");

  // console.log(search);
  const trimSearch = search.trim().toLowerCase();
  const filteredData = trimSearch
    ? data.filter((eachData) =>
        eachData.name.toLowerCase().includes(trimSearch)
      )
    : data;
  // console.log(filteredData);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-3xl">{filteredData.length} Products Found</h1>
          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              type="search"
              required
              placeholder="Get a Product"
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {filteredData.map((d) => (
            <Product key={d.id} d={d}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
