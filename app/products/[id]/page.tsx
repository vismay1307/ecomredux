import { getProduct } from "@/lib/api";
import ProductDetails from "@/components/product/ProductDetails";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const productId = Number(id);

  if (Number.isNaN(productId)) {
    notFound();
  }

  let product;

  try {
    product = await getProduct(productId);
  } catch {
    notFound();
  }

  return <ProductDetails product={product} />;
} 