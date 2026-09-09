/* eslint-disable @next/next/no-img-element */
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "list" | "compact";
  showBadge?: boolean;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({
  product,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = "grid",
  showBadge = true,
  onAddToCart,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      
      {/* Badge */}
      {showBadge && product.discountPercentage > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          {Math.round(product.discountPercentage)}% OFF
        </span>
      )}

      {/* Image */}
      <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <h2 className="mt-1 line-clamp-2 font-semibold text-gray-900">
          {product.title}
        </h2>

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

          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product)}
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}