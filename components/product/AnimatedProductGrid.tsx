"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface AnimatedProductGridProps {
  products: Product[];
}

export default function AnimatedProductGrid({
  products,
}: AnimatedProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: index * 0.05,
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}