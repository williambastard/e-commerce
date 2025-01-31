"use client";

import { Suspense } from "react";
import { productInterface } from "@/data/productInterface";
import ProductSkeleton from "./productSkeleton";

export function ProductCard({
  product,
  isLoading,
}: {
  product: productInterface;
  isLoading: boolean;
}) {
  if (isLoading) {
    // Affiche directement le squelette pendant le chargement initial
    return <ProductSkeleton />;
  }

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <div className="m-2 w-[15rem] self-end rounded-sm border bg-(--color-couleur-secondaire) p-4 shadow-md">
        <div className="mb-2 h-5 content-center justify-self-end">
          {product.productDiscountPercentage! > 0 && (
            <div className="rounded-md bg-(--color-couleur-accent-1) pr-2 pl-2 text-center text-xs font-bold">
              <span>Promotion -{product.productDiscountPercentage}%</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={product.productImage}
            alt="Test d'image"
            className="object-size-2 aspect-[1/1] h-full w-full rounded-sm object-cover"
            width="400"
            height="400"
          />
        </div>
        <div className="p-2">
          <div className="mt-2 flex items-start justify-between pb-6">
            <div>
              <h3 className="xs:text-xs line-clamp-1 text-sm font-bold text-(--color-couleur-accent-4) lg:text-xl">
                {product.productName}
              </h3>
              <p className="xs:text-xs lg:text-md line-clamp-3 text-sm text-gray-600">
                {product.productDescription}
              </p>
            </div>
          </div>

          <div className="m-2 flex items-center justify-between">
            <div className="xs:text-xs lg:text-md flex flex-col items-start text-sm">
              <span className="text-(--color-background) italic">
                Prix T.T.C
              </span>
              <span className="font-bold text-(--color-background)">
                {(product.productPrice / 100).toFixed(2)}€
              </span>
            </div>
            <button className="rounded-sm bg-(--color-couleur-primaire) px-4 py-2 font-bold text-white hover:cursor-pointer hover:bg-(--color-cta-red-hover)">
              <svg
                className="size-4 fill-(--color-add-to-cart)"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 26 26"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M25.856,10.641C21.673,19.5,20.312,19.5,19.5,19.5h-8c-2.802,0-4.949-1.648-5.47-4.2
		c-0.016-0.078-1.6-7.853-2.005-10.025C3.826,4.21,3.32,3.5,1.5,3.5C0.671,3.5,0,2.829,0,2s0.671-1.5,1.5-1.5
		c3.02,0,4.964,1.5,5.474,4.224c0.401,2.149,1.98,9.898,1.996,9.977c0.319,1.566,1.722,1.8,2.53,1.8h7.605
		c0.817-0.878,2.679-4.261,4.038-7.141c0.354-0.749,1.249-1.068,1.997-0.716C25.89,8.997,26.21,9.891,25.856,10.641z M10.5,20.5
		C9.119,20.5,8,21.619,8,23s1.119,2.5,2.5,2.5S13,24.381,13,23S11.881,20.5,10.5,20.5z M19.5,20.5c-1.381,0-2.5,1.119-2.5,2.5
		s1.119,2.5,2.5,2.5S22,24.381,22,23S20.881,20.5,19.5,20.5z M14.663,12.344c0.1,0.081,0.223,0.12,0.346,0.12
		s0.244-0.039,0.346-0.12c0.1-0.079,2.828-2.74,4.316-4.954c0.115-0.172,0.126-0.392,0.028-0.574
		c-0.095-0.181-0.285-0.295-0.49-0.295h-2.226c0,0-0.217-4.291-0.359-4.49c-0.206-0.294-1.057-0.494-1.616-0.494
		c-0.561,0-1.427,0.2-1.634,0.494c-0.141,0.198-0.328,4.49-0.328,4.49h-2.255c-0.206,0-0.395,0.114-0.492,0.295
		c-0.097,0.182-0.086,0.403,0.028,0.574C11.816,9.605,14.564,12.265,14.663,12.344z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
