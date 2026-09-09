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

  try {
    const product = await getProduct(productId);

    return <ProductDetails product={product} />;
  } catch {
    notFound();
  }
}