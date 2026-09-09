"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { toggleWishlist } from "@/store/slices/wishlistSlice";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "list" | "compact";
  showBadge?: boolean;
}

export default function ProductCard({
  product,
  variant = "grid",
  showBadge = true,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  const isWishlisted = useAppSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id),
  );

  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Wishlist */}
      <button
        onClick={() => dispatch(toggleWishlist(product))}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-white text-lg shadow-sm transition-transform hover:scale-110"
        aria-label="Toggle wishlist"
      >
        {isWishlisted ? "❤️" : "♡"}
      </button>

      {/* Badge */}
      {showBadge && product.discountPercentage > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          {Math.round(product.discountPercentage)}% OFF
        </span>
      )}

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm capitalize text-gray-500">
          {product.category}
        </p>

        {/* Product Title */}
        <Link href={`/products/${product.id}`}>
          <h2 className="mt-1 line-clamp-2 font-semibold text-gray-900 hover:underline">
            {product.title}
          </h2>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-medium">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-400">
            {product.stock} in stock
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}