"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetFilters,
  setCategory,
  setPriceRange,
  setSearch,
  setSort,
} from "@/store/slices/filterSlice";

const categories = [
  "all",
  "beauty",
  "laptops",
  "furniture",
  "groceries",
  "mens-shirts",
  "mens-shoes",
  "womens-dresses",
  "womens-shoes",
  "fragrances",
];

export default function ProductFilters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Search
          </label>

          <input
            type="text"
            value={filters.search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Search products..."
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-black"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            value={filters.category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-black"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all"
                  ? "All Categories"
                  : category.replace("-", " ")}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Sort By
          </label>

          <select
            value={`${filters.sortBy}-${filters.sortOrder}`}
            onChange={(e) => {
              const [sortBy, sortOrder] = e.target.value.split("-");

              dispatch(
                setSort({
                  sortBy: sortBy as "price" | "rating" | "default",
                  sortOrder: sortOrder as "asc" | "desc",
                }),
              );
            }}
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-black"
          >
            <option value="default-asc">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Min Price
          </label>

          <input
            type="number"
            min="0"
            value={filters.minPrice}
            onChange={(e) =>
              dispatch(setPriceRange({
                minPrice: Number(e.target.value),
                maxPrice: filters.maxPrice,
              }))
            }
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Max Price
          </label>

          <input
            type="number"
            min="0"
            value={filters.maxPrice}
            onChange={(e) =>
              dispatch(setPriceRange({
                minPrice: filters.minPrice,
                maxPrice: Number(e.target.value),
              }))
            }
            className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            onClick={() => dispatch(resetFilters())}
            className="w-full rounded-lg border px-4 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </section>
  );
}