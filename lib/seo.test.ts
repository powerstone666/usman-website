import { describe, expect, it } from "vitest";
import { createMetadata } from "@/lib/seo";

describe("createMetadata", () => {
  it("builds canonical and title", () => {
    const metadata = createMetadata({
      title: "Shop",
      description: "desc",
      path: "/shop",
      image: "/og.png",
    });

    expect(metadata.title).toBe(
      "Shop | Shaik Enterprises Consulting and Development LLC",
    );
    expect(String(metadata.alternates?.canonical)).toContain("/shop");
  });
});
