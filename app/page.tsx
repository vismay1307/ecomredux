import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Home() {
  const data = await getProducts(8, 0);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          Featured collection
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Discover products
        </h1>

        <p className="mt-2 text-gray-500">
          Browse our latest products and find something you love.
        </p>
      </div>

      <ProductGrid products={data.products} />
    </main>
  );
}