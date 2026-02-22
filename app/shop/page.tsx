import { JsonLd } from "@/components/seo/json-ld";
import { ShopFilters } from "@/components/shop/shop-filters";
import { SectionHeading } from "@/components/ui/section-heading";
import { filterHouseholdProducts, getHouseholdCategorySlugs } from "@/lib/catalog";
import { getProducts } from "@/lib/api/fakeStore";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shop All Products",
  description: "Browse curated product categories and discover top-rated picks.",
  path: "/shop",
  image: "/marketing/banner-spotlight.png",
});

export default async function ShopPage() {
  const products = await getProducts();
  const householdProducts = filterHouseholdProducts(products);
  const categories = getHouseholdCategorySlugs();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: householdProducts.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `/shop/${product.id}`,
            name: product.title,
          })),
        }}
      />
      <section className="container section intro-section">
        <SectionHeading
          eyebrow="Catalog"
          title="Explore Household Categories"
          description="Filter household products like decor, kitchenware, dining, and storage essentials."
        />
        <div className="content-grid">
          <article className="content-card">
            <h3>Catalog Scope</h3>
            <p>
              This catalog focuses on household verticals prioritized for stable demand and
              operationally predictable fulfillment.
            </p>
          </article>
          <article className="content-card">
            <h3>Selection Criteria</h3>
            <p>
              Products are selected based on supplier approval status, listing readiness, and
              warehouse dispatch capability.
            </p>
          </article>
        </div>
      </section>
      <ShopFilters products={householdProducts} categories={categories} />
    </>
  );
}
