import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          ShelfCart
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-600 transition-colors hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-600 transition-colors hover:text-black"
          >
            Products
          </Link>

          <Link
            href="/wishlist"
            className="text-gray-600 transition-colors hover:text-black"
          >
            Wishlist
          </Link>

          <Link
            href="/cart"
            className="rounded-lg bg-black px-4 py-2 text-white transition-transform hover:scale-105"
          >
            Cart
          </Link>
        </nav>

      </div>
    </header>
  );
}