// app/page.js (Client Component) - Keep "use client"
"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/app/components/tests/product-card";
import { productInterface } from "@/data/productInterface";
import ProductSkeleton from "@/app/components/tests/product-skeleton";

function Page() {
  const [products, setProducts] = useState<productInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token =
      "41042af2c1dd415905b2854948da4fe6f7e03c9a3ecfb8261c3d72a8df4f5825e773050c9a3a6d1da879d844febc44d4db536fb5492dbaa5f5ec7d01f5e526f9f5315f19411a82f6bd64e8fda8ea51998e5f6fa69fce542ca08e1f9f18cf9b15b320f11b2ea0e9bc0560adda1b2e6c46cc7b3848a8d3bba29d0e63a3820cceae"; // Or however you store your token

    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}), // Add token if available/ Allow customization of headers
    };

    const mergedOptions = {
      headers: headers,
    };

    fetch("http://localhost:3002/api/products", mergedOptions) // No async keyword here
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setProducts(data.data);
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
    <div className="flex flex-row flex-wrap items-start justify-start sm:flex-row">
      {products.map((product: productInterface) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Page;
