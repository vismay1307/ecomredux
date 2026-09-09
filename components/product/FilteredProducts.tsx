"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { Product } from "@/lib/types";
import ProductGrid from "./ProductGrid";

interface FilteredProductsProps {
  products: Product[];
}

export default function FilteredProducts({
  products,
}: FilteredProductsProps) {
  const filters = useAppSelector((state) => state.filters);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (filters.search.trim()) {
      const search = filters.search.toLowerCase();

      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.brand.toLowerCase().includes(search),
      );
    }

    // Category
    if (filters.category !== "all") {
      result = result.filter(
        (product) => product.category === filters.category,
      );
    }

    // Price
    result = result.filter(
      (product) =>
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice,
    );

    // Sort
    if (filters.sortBy === "price") {
      result.sort((a, b) =>
        filters.sortOrder === "asc"
          ? a.price - b.price
          : b.price - a.price,
      );
    }

    if (filters.sortBy === "rating") {
      result.sort((a, b) =>
        filters.sortOrder === "asc"
          ? a.rating - b.rating
          : b.rating - a.rating,
      );
    }

    return result;
  }, [products, filters]);

  if (filteredProducts.length === 0) {
    return (
      <div className="rounded-2xl border bg-gray-50 px-6 py-16 text-center">
        <div className="text-5xl">🔍</div>

        <h2 className="mt-4 text-2xl font-bold">
          No products found
        </h2>

        <p className="mt-2 text-gray-500">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return <ProductGrid products={filteredProducts} />;
}