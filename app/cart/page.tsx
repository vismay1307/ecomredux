"use client";

import Link from "next/link";

import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/slices/cartSlice";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function CartPage() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl">🛒</div>

          <h1 className="mt-4 text-3xl font-bold">
            Your cart is empty
          </h1>

          <p className="mt-2 text-gray-500">
            Add some products to get started.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Shopping Cart
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Your Cart
          </h1>
        </div>

        <button
          onClick={() => dispatch(clearCart())}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl border bg-white p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-28 w-28 rounded-xl bg-gray-50 object-contain p-2"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-sm capitalize text-gray-500">
                    {item.category}
                  </p>

                  <h2 className="mt-1 font-semibold">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {/* Quantity */}
                  <div className="flex items-center rounded-lg border">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      className="px-3 py-1 text-lg hover:bg-gray-50"
                    >
                      −
                    </button>

                    <span className="px-3 font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                      className="px-3 py-1 text-lg hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-2xl border bg-gray-50 p-6">
          <h2 className="text-xl font-bold">
            Order Summary
          </h2>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">
                Items
              </span>

              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span>
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Shipping
              </span>

              <span>Free</span>
            </div>
          </div>

          <div className="my-6 border-t" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full rounded-lg bg-black px-5 py-3 font-medium text-white hover:opacity-90">
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}