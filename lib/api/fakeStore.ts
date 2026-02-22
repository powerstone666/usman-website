import type { Category, Product } from "@/lib/types";
import {
  HOUSEHOLD_MOCK_PRODUCTS,
  LOCAL_MOCK_ID_OFFSET,
} from "@/lib/data/householdMockProducts";

interface EscuelajsCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface EscuelajsProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: EscuelajsCategory;
}

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating?: number;
  thumbnail?: string;
  images?: string[];
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[];
}

const ESCUELA_API_BASE_URL = "https://api.escuelajs.co/api/v1";
const DUMMY_JSON_API_BASE_URL = "https://dummyjson.com";
const DUMMY_JSON_ID_OFFSET = 1_000_000;
const REVALIDATE_SECONDS = 3600;

async function fetchJson<T>(
  baseUrl: string,
  path: string,
  sourceName: string,
): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`${sourceName} API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function mapEscuelajsProduct(product: EscuelajsProduct): Product {
  const primaryImage =
    product.images.find((image) => image.startsWith("http")) ??
    product.category.image ??
    "/window.svg";

  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category.name.toLowerCase(),
    image: primaryImage,
    // Escuelajs does not include ratings, so keep deterministic placeholder values.
    rating: {
      rate: 4.2,
      count: 120,
    },
  };
}

function mapDummyJsonProduct(product: DummyJsonProduct): Product {
  const primaryImage =
    product.images?.find((image) => image.startsWith("http")) ??
    product.thumbnail ??
    "/window.svg";

  return {
    id: DUMMY_JSON_ID_OFFSET + product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category.toLowerCase(),
    image: primaryImage,
    rating: {
      rate: product.rating ?? 4.2,
      count: 120,
    },
  };
}

async function getEscuelajsProducts(): Promise<Product[]> {
  try {
    const products = await fetchJson<EscuelajsProduct[]>(
      ESCUELA_API_BASE_URL,
      "/products",
      "Escuelajs",
    );
    return products.map(mapEscuelajsProduct);
  } catch {
    return [];
  }
}

async function getDummyJsonProducts(): Promise<Product[]> {
  try {
    const response = await fetchJson<DummyJsonProductsResponse>(
      DUMMY_JSON_API_BASE_URL,
      "/products?limit=100",
      "DummyJSON",
    );
    return response.products.map(mapDummyJsonProduct);
  } catch {
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  const [escuelajsProducts, dummyJsonProducts] = await Promise.all([
    getEscuelajsProducts(),
    getDummyJsonProducts(),
  ]);

  return [...HOUSEHOLD_MOCK_PRODUCTS, ...escuelajsProducts, ...dummyJsonProducts];
}

export async function getProductById(id: number): Promise<Product> {
  if (id >= LOCAL_MOCK_ID_OFFSET) {
    const localProduct = HOUSEHOLD_MOCK_PRODUCTS.find((product) => product.id === id);
    if (localProduct) {
      return localProduct;
    }
  }

  if (id >= DUMMY_JSON_ID_OFFSET) {
    const dummyJsonId = id - DUMMY_JSON_ID_OFFSET;
    const product = await fetchJson<DummyJsonProduct>(
      DUMMY_JSON_API_BASE_URL,
      `/products/${dummyJsonId}`,
      "DummyJSON",
    );
    return mapDummyJsonProduct(product);
  }

  const product = await fetchJson<EscuelajsProduct>(
    ESCUELA_API_BASE_URL,
    `/products/${id}`,
    "Escuelajs",
  );
  return mapEscuelajsProduct(product);
}

export async function getCategories(): Promise<Category[]> {
  const products = await getProducts();
  return [...new Set(products.map((product) => product.category.toLowerCase()))];
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const normalizedCategory = category.toLowerCase();
  const products = await getProducts();
  return products.filter((product) => product.category.toLowerCase() === normalizedCategory);
}
