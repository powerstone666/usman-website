import type { Product } from "@/lib/types";

export const AMAZON_STORE_URL = "https://www.amazon.com/";

export function buildAmazonLink(product?: Product): string {
  if (!product) {
    return AMAZON_STORE_URL;
  }

  const separator = AMAZON_STORE_URL.includes("?") ? "&" : "?";
  const keyword = encodeURIComponent(product.title.slice(0, 80));

  return `${AMAZON_STORE_URL}${separator}k=${keyword}`;
}
