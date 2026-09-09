"use client";

import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromWishlist } from "@/store/slices/wishlistSlice";

export default function WishlistPage() {
  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector(
    (state) => state.wishlist.items
  );

  if (wishlistItems.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl">♡</div>

          <h1 className="mt-4 text-3xl font-bold">
            Your wishlist is empty
          </h1>

          <p className="mt-2 text-gray-500">
            Save products you want to check out later.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          Saved products
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Your Wishlist
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-2xl border bg-white p-4"
          >
            <div className="flex h-48 items-center justify-center rounded-xl bg-gray-50">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain p-4"
              />
            </div>

            <p className="mt-4 text-sm capitalize text-gray-500">
              {product.category}
            </p>

            <h2 className="mt-1 line-clamp-2 font-semibold">
              {product.title}
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold">
                ${product.price}
              </span>

              <button
                onClick={() =>
                  dispatch(removeFromWishlist(product.id))
                }
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}