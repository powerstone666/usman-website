import type { Product } from "@/lib/types";

export interface HouseholdCategoryConfig {
  slug: string;
  label: string;
  keywords: string[];
}

const NON_HOUSEHOLD_SOURCE_CATEGORIES = new Set([
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
  "clothes",
  "shoes",
  "miscellaneous",
  "others",
]);

const HOUSEHOLD_SOURCE_CATEGORIES = new Set([
  "furniture",
  "home",
  "household",
  "decor",
  "kitchen",
  "home decor",
  "home-decoration",
  "kitchen-accessories",
]);

const NON_HOUSEHOLD_KEYWORDS = [
  "shirt",
  "t-shirt",
  "jacket",
  "jean",
  "hoodie",
  "backpack",
  "laptop",
  "ssd",
  "hard drive",
  "usb",
  "gaming",
  "ring",
  "necklace",
  "bracelet",
  "earring",
];

export const HOUSEHOLD_CATEGORY_CONFIG: HouseholdCategoryConfig[] = [
  {
    slug: "home-decor",
    label: "Home Decor",
    keywords: ["decor", "vase", "candle", "frame", "rug", "lamp", "wall", "art", "pillow"],
  },
  {
    slug: "kitchenware",
    label: "Kitchenware",
    keywords: ["kitchen", "cook", "pan", "pot", "knife", "plate", "cup", "mug", "utensil", "bottle"],
  },
  {
    slug: "dining",
    label: "Dining",
    keywords: ["dining", "table", "serve", "glass", "cutlery", "fork", "spoon", "bowl"],
  },
  {
    slug: "storage-organization",
    label: "Storage & Organization",
    keywords: ["storage", "organizer", "holder", "container", "shelf", "basket", "rack"],
  },
  {
    slug: "cleaning-homecare",
    label: "Cleaning & Homecare",
    keywords: ["clean", "soap", "scrub", "brush", "cloth", "mop", "broom", "towel"],
  },
];

function normalizedText(product: Product): string {
  return `${product.title} ${product.description} ${product.category}`.toLowerCase();
}

function isStrictlyNonHousehold(product: Product, text: string): boolean {
  if (NON_HOUSEHOLD_SOURCE_CATEGORIES.has(product.category.toLowerCase())) {
    return true;
  }

  return NON_HOUSEHOLD_KEYWORDS.some((keyword) => text.includes(keyword));
}

export function getHouseholdCategorySlug(product: Product): string | null {
  const text = normalizedText(product);
  if (isStrictlyNonHousehold(product, text)) {
    return null;
  }

  if (HOUSEHOLD_SOURCE_CATEGORIES.has(product.category.toLowerCase())) {
    for (const category of HOUSEHOLD_CATEGORY_CONFIG) {
      if (category.keywords.some((keyword) => text.includes(keyword))) {
        return category.slug;
      }
    }
    return "home-decor";
  }

  for (const category of HOUSEHOLD_CATEGORY_CONFIG) {
    if (category.keywords.some((keyword) => text.includes(keyword))) {
      return category.slug;
    }
  }

  return null;
}

export function getHouseholdCategoryLabel(slug: string): string {
  return HOUSEHOLD_CATEGORY_CONFIG.find((category) => category.slug === slug)?.label ?? "Household";
}

export function getHouseholdCategorySlugs(): string[] {
  return HOUSEHOLD_CATEGORY_CONFIG.map((category) => category.slug);
}

export function isHouseholdCategorySlug(slug: string): boolean {
  return HOUSEHOLD_CATEGORY_CONFIG.some((category) => category.slug === slug);
}

export function filterHouseholdProducts(products: Product[]): Product[] {
  return products.filter((product) => getHouseholdCategorySlug(product) !== null);
}

export function filterHouseholdProductsBySlug(products: Product[], slug: string): Product[] {
  return products.filter((product) => getHouseholdCategorySlug(product) === slug);
}
