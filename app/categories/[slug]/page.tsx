import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopFilters } from "@/components/shop/shop-filters";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  filterHouseholdProductsBySlug,
  getHouseholdCategoryLabel,
  getHouseholdCategorySlugs,
  isHouseholdCategorySlug,
} from "@/lib/catalog";
import { getProducts } from "@/lib/api/fakeStore";
import { createMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getHouseholdCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isHouseholdCategorySlug(slug)) {
    notFound();
  }
  const categoryLabel = getHouseholdCategoryLabel(slug);

  return createMetadata({
    title: `${categoryLabel} Products`,
    description: `Shop curated ${categoryLabel.toLowerCase()} selections with direct marketplace redirects.`,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  if (!isHouseholdCategorySlug(slug)) {
    notFound();
  }
  const categoryLabel = getHouseholdCategoryLabel(slug);
  const products = await getProducts();
  const householdProducts = filterHouseholdProductsBySlug(products, slug);
  const categories = getHouseholdCategorySlugs();

  return (
    <>
      <section className="container section intro-section">
        <SectionHeading
          eyebrow="Category"
          title={categoryLabel}
          description="Focused household collection with direct marketplace product redirects."
        />
        <div className="content-grid">
          <article className="content-card">
            <h3>Category Focus</h3>
            <p>
              This section groups SKUs by operational similarity, making listing updates,
              replenishment planning, and quality checks easier to manage.
            </p>
          </article>
          <article className="content-card">
            <h3>Fulfillment Readiness</h3>
            <p>
              Items shown here are prioritized for supplier-side dispatch efficiency and consistent
              post-listing maintenance.
            </p>
          </article>
        </div>
      </section>
      <ShopFilters products={householdProducts} categories={categories} initialCategory={slug} />
    </>
  );
}
