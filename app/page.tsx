// app/page.js (Client Component) - Keep "use client"
"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/app/components/tests/product";
import { productInterface } from "@/boite-a-outils/data/productInterface";
import ProductSkeleton from "@/app/components/tests/productSkeleton";

function Page() {
  const [products, setProducts] = useState<productInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./assets/jsons/products.json") // No async keyword here
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setIsLoading(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <ProductSkeleton />; // Or your skeleton component
  }

  return (
    <div className="flex flex-row flex-wrap items-start items-stretch justify-start sm:flex-row">
      {products.map((product: productInterface) => (
        <ProductCard
          key={product.productId}
          product={product}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

export default Page;
