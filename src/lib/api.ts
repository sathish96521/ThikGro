const API_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`;

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  description: string;
  stock: number;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const api = {
  async getProducts(category?: string): Promise<Product[]> {
    const url = category && category !== 'all'
      ? `${API_BASE_URL}/products?category=${category}`
      : `${API_BASE_URL}/products`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return response.json();
  },

  async getProduct(id: string): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    return response.json();
  },

  async getCategories(): Promise<Category[]> {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    return response.json();
  },
};
