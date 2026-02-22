import Image from "next/image";
import Link from "next/link";
import { getHouseholdCategoryLabel } from "@/lib/catalog";

interface CategoryPillsProps {
  categories: string[];
}

export function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <section className="container section">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <Link key={category} className="category-card" href={`/categories/${category}`}>
            <Image
              src={`/marketing/categories/${category}.png`}
              alt={`${getHouseholdCategoryLabel(category)} category`}
              width={420}
              height={280}
              className="category-card-image"
            />
            <span>{getHouseholdCategoryLabel(category)}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
