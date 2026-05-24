export interface Product {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  descriptionEn?: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags?: string[];
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'size';
  options: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  image: string;
  count: number;
  description?: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
}
