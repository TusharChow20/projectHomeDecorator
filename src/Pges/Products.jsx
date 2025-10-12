import React, { useMemo, useState } from "react";
import { useDataload } from "../Hooks/useDataload";
import Product from "../Component/Product";
import { Link } from "react-router";
import { FaArrowDown } from "react-icons/fa";
const Products = () => {
  const { data } = useDataload();

  const [search, setSearch] = useState("");

  // console.log(search);
  const trimSearch = search.trim().toLowerCase();
  const [sort, setSort] = useState("Sort");

  // const filteredData = trimSearch
  //   ? data.filter((eachData) =>
  //       eachData.name.toLowerCase().includes(trimSearch)
  //     )
  //   : data;
  // use memo
  // console.log(sort);

  const filteredData = useMemo(() => {
    if (!trimSearch) {
      return data;
    }
    return data.filter((eachData) =>
      eachData.name.toLowerCase().includes(trimSearch)
    );
  }, [data, trimSearch]);
  const tempData = [...filteredData];
  // console.log(filteredData);
  const handleSort = () => {
    if (sort === "low-high") {
      return tempData.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      return tempData.sort((b, a) => a.price - b.price);
    } else {
      return filteredData;
    }
  };
  // console.log(handleSort());

  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-3xl">{filteredData.length} Products Found</h1>
          <div className="flex flex-row-reverse items-center">
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
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 flex">
                <FaArrowDown />
                {sort}
              </div>
              <ul
                tabIndex="-1"
                // value="Sort"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li onClick={() => setSort("Sort")}>
                  <a>Default</a>
                </li>
                <li onClick={() => setSort("high-low")}>
                  <a>Price High-Low</a>
                </li>
                <li>
                  <a onClick={() => setSort("low-high")}>Price Low-High</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {handleSort().map((d) => (
            <Product key={d.id} d={d}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
