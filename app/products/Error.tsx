"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ProductErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductError({
  error,
  reset,
}: ProductErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-6xl">📦</div>

        <h1 className="mt-5 text-3xl font-bold">
          Product unavailable
        </h1>

        <p className="mt-3 text-gray-500">
          We couldn&apos;t load this product.
          Please try again or browse other products.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Try Again
          </button>

          <Link
            href="/products"
            className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}