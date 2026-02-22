import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { ProductCard } from "@/components/ui/product-card";
import { RatingStars } from "@/components/ui/rating-stars";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProductById, getProducts } from "@/lib/api/fakeStore";
import { filterHouseholdProducts, getHouseholdCategorySlug } from "@/lib/catalog";
import { createMetadata } from "@/lib/seo";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  const householdProducts = filterHouseholdProducts(products);
  return householdProducts.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!getHouseholdCategorySlug(product)) {
    notFound();
  }

  return createMetadata({
    title: product.title,
    description: product.description,
    path: `/shop/${product.id}`,
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!getHouseholdCategorySlug(product)) {
    notFound();
  }
  const products = await getProducts();
  const householdProducts = filterHouseholdProducts(products);
  const householdCategory = getHouseholdCategorySlug(product);
  const relatedProducts = householdProducts
    .filter(
      (candidate) =>
        getHouseholdCategorySlug(candidate) === householdCategory &&
        candidate.id !== product.id,
    )
    .slice(0, 4);

  return (
    <section className="container section">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description: product.description,
          image: product.image,
          category: product.category,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating.rate,
            reviewCount: product.rating.count,
          },
        }}
      />
      <Link href="/shop" className="text-link">
        Back to shop
      </Link>
      <div className="product-detail">
        <Image src={product.image} alt={product.title} width={540} height={540} className="product-detail-image" />
        <div className="product-detail-meta">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <div className="rating-row">
            <RatingStars value={product.rating.rate} />
            <span>{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</span>
          </div>
          <p>{product.description}</p>
          <div className="content-grid">
            <article className="content-card">
              <h3>Listing Notes</h3>
              <p>
                This product is managed under our supplier-approved marketplace listing workflow
                with ongoing compliance and content monitoring.
              </p>
            </article>
            <article className="content-card">
              <h3>Operational Notes</h3>
              <p>
                Dispatch is coordinated from supplier warehouse stock and tracked through
                marketplace order events and service-level checks.
              </p>
            </article>
          </div>
          <AffiliateButton product={product} className="btn btn-primary" />
          <p className="disclaimer">
            Orders for listed products are handled through marketplace checkout and shipping workflows.
          </p>
        </div>
      </div>

      {relatedProducts.length > 0 ? (
        <section className="section">
          <SectionHeading title="Related Products" />
          <div className="product-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
