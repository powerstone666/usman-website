import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { getHouseholdCategoryLabel, getHouseholdCategorySlug } from "@/lib/catalog";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { RatingStars } from "@/components/ui/rating-stars";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const householdCategory =
    getHouseholdCategorySlug(product) ?? "home-decor";

  return (
    <article className="product-card">
      <Link href={`/shop/${product.id}`} className="product-image-link" aria-label={product.title}>
        <Image
          src={product.image}
          alt={product.title}
          width={320}
          height={320}
          className="product-image"
        />
      </Link>
      <div className="product-meta">
        <p className="product-category">{getHouseholdCategoryLabel(householdCategory)}</p>
        <h3>
          <Link href={`/shop/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="rating-row">
          <RatingStars value={product.rating.rate} />
          <span>({product.rating.count})</span>
        </div>
      </div>
      <AffiliateButton product={product} />
    </article>
  );
}
