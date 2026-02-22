export type Category = string;

export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: ProductRating;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}
