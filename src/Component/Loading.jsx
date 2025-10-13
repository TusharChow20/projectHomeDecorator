import React from "react";

const Loading = ({ count = 6 }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="flex  flex-col gap-2">
            <div className=" skeleton h-50 w-full"></div>
            {/* <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div> */}
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
