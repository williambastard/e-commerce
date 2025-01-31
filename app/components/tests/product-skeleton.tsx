import React from "react";

function ProductSkeleton() {
  return (
    <div className="m-2 w-[15rem] animate-pulse rounded-sm border bg-gray-200 p-4 shadow-md">
      {" "}
      {/* Skeleton container */}
      <div className="mb-2 h-5 content-center justify-self-end"></div>
      <div className="flex items-center justify-center">
        <div className="object-size-2 aspect-[1/1] h-full w-full rounded-sm bg-gray-300">
          {" "}
          {/* Image placeholder */}
          &nbsp;
        </div>
      </div>
      <div className="p-2">
        <div className="mt-2 flex items-start justify-between pb-6"></div>

        <div className="m-2 flex items-center justify-between">
          <div className="xs:text-xs lg:text-md flex flex-col items-start text-sm">
            <span className="w-16 bg-gray-300 text-gray-400 italic">
              {" "}
              {/* Price label placeholder */}
              &nbsp;
            </span>
            <span className="w-20 bg-gray-300 font-bold text-gray-400">
              {" "}
              {/* Price placeholder */}
              &nbsp;
            </span>
          </div>
          <div className="w-24 rounded-sm bg-gray-300 px-4 py-2 font-bold text-white">
            {" "}
            {/* Add to cart button placeholder */}
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
