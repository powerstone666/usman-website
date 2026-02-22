import { render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes, ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { ProductCard } from "@/components/ui/product-card";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ""} />,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("ProductCard", () => {
  it("renders product title and product button", () => {
    render(
      <ProductCard
        product={{
          id: 2,
          title: "Travel Backpack",
          price: 59,
          description: "desc",
          category: "bags",
          image: "https://fakestoreapi.com/img/test.png",
          rating: { rate: 4.1, count: 50 },
        }}
      />,
    );

    expect(screen.getByText("Travel Backpack")).toBeInTheDocument();
    const amazonLink = screen.getByRole("link", { name: /view product/i });
    expect(amazonLink.getAttribute("href")).toContain("amazon.com");
  });
});
