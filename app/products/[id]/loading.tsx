export default function ProductDetailLoading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image Skeleton */}
        <div className="flex min-h-[500px] animate-pulse items-center justify-center rounded-2xl bg-gray-200" />

        {/* Details Skeleton */}
        <div className="flex flex-col justify-center">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

          <div className="mt-4 h-10 w-3/4 animate-pulse rounded bg-gray-200" />

          <div className="mt-4 h-5 w-40 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 h-9 w-28 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
          </div>

          <div className="mt-8 h-24 animate-pulse rounded-2xl bg-gray-200" />

          <div className="mt-8 h-14 w-full animate-pulse rounded-xl bg-gray-200" />
        </div>
      </div>
    </main>
  );
}