import { CategoryPills } from "@/components/home/category-pills";
import { FeatureGrid } from "@/components/home/feature-grid";
import { Hero } from "@/components/home/hero";
import { OperationsOverview } from "@/components/home/operations-overview";
import { TrustBadges } from "@/components/home/trust-badges";
import { JsonLd } from "@/components/seo/json-ld";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  filterHouseholdProducts,
  getHouseholdCategorySlugs,
} from "@/lib/catalog";
import { getProducts } from "@/lib/api/fakeStore";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ecommerce Reseller Product Catalog",
  description:
    "Explore our ecommerce reseller catalog built on approved supplier relationships and structured fulfillment operations.",
  path: "/",
  image: "/marketing/banner-deals.png",
});

export default async function HomePage() {
  const products = await getProducts();
  const householdProducts = filterHouseholdProducts(products);
  const featuredProducts = householdProducts.slice(0, 8);
  const categories = getHouseholdCategorySlugs();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: featuredProducts.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `/shop/${product.id}`,
            name: product.title,
          })),
        }}
      />
      <Hero />
      <FeatureGrid />
      <OperationsOverview />
      <CategoryPills categories={categories} />
      <TrustBadges />
      <section className="container section">
        <div className="content-grid">
          <article className="content-card">
            <h3>What This Catalog Represents</h3>
            <p>
              Listed products come from approved supplier relationships. We purchase inventory,
              manage listings, and coordinate dispatch workflows through marketplace channels.
            </p>
          </article>
          <article className="content-card">
            <h3>Where We Sell</h3>
            <p>
              We operate across major ecommerce marketplaces based on product fit and supplier
              agreement terms, including channel-specific compliance and listing standards.
            </p>
          </article>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow="Catalog Highlights"
          title="Top Picks This Week"
          description="High-demand products from approved supplier catalogs."
        />
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
