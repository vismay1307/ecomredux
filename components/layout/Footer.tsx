export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} ShelfCart
        </p>

        <p>
          Built with Next.js, Redux Toolkit & TypeScript
        </p>
      </div>
    </footer>
  );
}