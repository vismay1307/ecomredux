"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-gray-500">
          Something went wrong
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Couldn't load products
        </h1>

        <p className="mt-3 text-gray-500">
          The product service is temporarily unavailable.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}