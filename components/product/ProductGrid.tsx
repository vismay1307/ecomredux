import { Product } from "@/lib/types";
import AnimatedProductGrid from "./AnimatedProductGrid";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return <AnimatedProductGrid products={products} />;
}