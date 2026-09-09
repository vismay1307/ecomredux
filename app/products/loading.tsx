export default function ProductsLoading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="mt-3 h-10 w-72 animate-pulse rounded bg-gray-200" />
        <div className="mt-3 h-4 w-52 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Filters Skeleton */}
      <div className="mb-8 grid gap-4 rounded-2xl border p-5 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-11 animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>

      {/* Products Skeleton */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border p-4"
          >
            <div className="h-56 animate-pulse rounded-xl bg-gray-200" />

            <div className="mt-4 h-4 w-20 animate-pulse rounded bg-gray-200" />

            <div className="mt-2 h-5 w-full animate-pulse rounded bg-gray-200" />

            <div className="mt-2 h-5 w-3/4 animate-pulse rounded bg-gray-200" />

            <div className="mt-4 flex justify-between">
              <div className="h-7 w-20 animate-pulse rounded bg-gray-200" />
              <div className="h-9 w-16 animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}