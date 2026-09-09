import { getProducts } from "@/lib/api";
import FilteredProducts from "@/components/product/FilteredProducts";
import Pagination from "@/components/layout/Pagination";
import ProductFilters from "@/components/product/ProductFilters";
interface ProductsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const LIMIT = 12;

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { page: pageParam } = await searchParams;

  const page = Number(pageParam) || 1;

  const skip = (page - 1) * LIMIT;

  const data = await getProducts(LIMIT, skip);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          All products
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Explore our products
        </h1>

        <p className="mt-2 text-gray-500">
          Showing {skip + 1}–{Math.min(skip + LIMIT, data.total)} of{" "}
          {data.total} products
        </p>
      </div>
<ProductFilters />
      <FilteredProducts products={data.products} />

      <Pagination
        currentPage={page}
        totalProducts={data.total}
        limit={LIMIT}
      />
    </main>
  );
}