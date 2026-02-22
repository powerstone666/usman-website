"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import {
  getHouseholdCategoryLabel,
  getHouseholdCategorySlug,
} from "@/lib/catalog";
import { ProductCard } from "@/components/ui/product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";

const PAGE_SIZE = 8;

type SortOrder = "featured" | "rating-desc";

interface ShopFiltersProps {
  products: Product[];
  categories: string[];
  initialCategory?: string;
}

export function ShopFilters({ products, categories, initialCategory }: ShopFiltersProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory ?? "all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    let nextProducts = products.filter((product) => {
      const householdCategory = getHouseholdCategorySlug(product);
      const matchesCategory =
        selectedCategory === "all" || householdCategory === selectedCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    if (sortOrder === "rating-desc") {
      nextProducts = [...nextProducts].sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return nextProducts;
  }, [products, query, selectedCategory, sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(totalPages, 1));
  const pageProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <section className="container section">
      <div className="filters-panel">
        <label>
          Search
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search products"
          />
        </label>

        <label>
          Category
          <select
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
              setPage(1);
            }}
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {getHouseholdCategoryLabel(category)}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sort by
          <select
            value={sortOrder}
            onChange={(event) => {
              setSortOrder(event.target.value as SortOrder);
              setPage(1);
            }}
          >
            <option value="featured">Featured</option>
            <option value="rating-desc">Top Rated</option>
          </select>
        </label>
      </div>

      {pageProducts.length === 0 ? (
        <EmptyState
          title="No products found"
          description="Try a different search keyword or filter combination."
        />
      ) : (
        <>
          <div className="product-grid">
            {pageProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </section>
  );
}
