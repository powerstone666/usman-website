import type { Product } from "@/lib/types";
import { buildAmazonLink } from "@/lib/affiliate";

interface AffiliateButtonProps {
  product?: Product;
  className?: string;
  label?: string;
}

export function AffiliateButton({
  product,
  className,
  label = "View Product",
}: AffiliateButtonProps) {
  return (
    <a
      className={className ?? "btn btn-primary"}
      href={buildAmazonLink(product)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
