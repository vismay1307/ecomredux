import { Product, ProductsResponse } from "./types";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(
  limit = 12,
  skip = 0
): Promise<ProductsResponse> {
  const url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("getProducts error:", error);
    throw new Error("Unable to load products right now.");
  }
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getProductsByCategory(
  category: string
): Promise<ProductsResponse> {
  const response = await fetch(
    `${BASE_URL}/products/category/${category}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }

  return response.json();
}

export async function searchProducts(
  query: string
): Promise<ProductsResponse> {
  const response = await fetch(
    `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json();
}