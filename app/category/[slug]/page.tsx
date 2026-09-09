import {
  getCategories,
  getProductsByCategory,
} from "@/lib/api";

import ProductGrid from "@/components/product/ProductGrid";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const categoryName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${categoryName} | ShelfCart`,
    description: `Explore our ${categoryName} collection.`,
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const data = await getProductsByCategory(slug);

  const categoryName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          Category
        </p>

        <h1 className="mt-2 text-4xl font-bold capitalize tracking-tight">
          {categoryName}
        </h1>

        <p className="mt-2 text-gray-500">
          Explore our {categoryName} collection.
        </p>
      </div>

      <ProductGrid products={data.products} />
    </main>
  );
}