import { describe, expect, it } from "vitest";
import { AMAZON_STORE_URL, buildAmazonLink } from "@/lib/affiliate";

describe("buildAmazonLink", () => {
  it("returns base url when product is undefined", () => {
    expect(buildAmazonLink()).toBe(AMAZON_STORE_URL);
  });

  it("appends keyword query for products", () => {
    const link = buildAmazonLink({
      id: 1,
      title: "Premium Headphones",
      price: 99.9,
      description: "desc",
      category: "electronics",
      image: "https://example.com/image.png",
      rating: { rate: 4.5, count: 21 },
    });

    expect(link).toContain("k=Premium%20Headphones");
  });
});
