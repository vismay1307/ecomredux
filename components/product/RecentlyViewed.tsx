"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

/* eslint-disable @next/next/no-img-element */

export default function RecentlyViewed() {
  const products = useAppSelector(
    (state) => state.recentlyViewed.items,
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-500">
          Your history
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Recently Viewed
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group rounded-2xl border bg-white p-3 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-32 items-center justify-center rounded-xl bg-gray-50">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="mt-3 line-clamp-2 text-sm font-medium">
              {product.title}
            </p>

            <p className="mt-2 font-bold">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}