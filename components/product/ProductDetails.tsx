"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { addRecentlyViewed } from "@/store/slices/recentlyViewedSlice";
import { Product } from "@/lib/types";

/* eslint-disable @next/next/no-img-element */

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addRecentlyViewed(product));
  }, [dispatch, product]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="flex min-h-[500px] items-center justify-center rounded-2xl bg-gray-50 p-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-[450px] w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium capitalize text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <span className="font-medium">
              ⭐ {product.rating}
            </span>

            <span className="text-gray-500">
              {product.stock} in stock
            </span>
          </div>

          <p className="mt-6 text-3xl font-bold">
            ${product.price}
          </p>

          <p className="mt-6 leading-7 text-gray-600">
            {product.description}
          </p>

          {/* Product Info */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border p-5">
            <div>
              <p className="text-sm text-gray-500">Brand</p>
              <p className="mt-1 font-semibold">
                {product.brand}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Discount</p>
              <p className="mt-1 font-semibold">
                {Math.round(product.discountPercentage)}% OFF
              </p>
            </div>
          </div>

          {/* Add To Cart */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-8 rounded-xl bg-black px-6 py-4 font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}