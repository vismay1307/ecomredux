import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  limit: number;
}

export default function Pagination({
  currentPage,
  totalProducts,
  limit,
}: PaginationProps) {
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`/products?page=${currentPage - 1}`}
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <Link
            key={page}
            href={`/products?page=${page}`}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              page === currentPage
                ? "bg-black text-white"
                : "border hover:bg-gray-50"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={`/products?page=${currentPage + 1}`}
          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Next
        </Link>
      )}
    </div>
  );
}