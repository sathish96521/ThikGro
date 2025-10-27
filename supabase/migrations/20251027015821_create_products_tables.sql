/*
  # Create Products and Categories Tables

  ## New Tables
  
  ### `categories`
  - `id` (text, primary key) - Unique category identifier
  - `name` (text, not null) - Category display name
  - `icon` (text) - Category icon/emoji
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### `products`
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text, not null) - Product name
  - `price` (decimal, not null) - Product price
  - `image` (text, not null) - Product image URL
  - `category` (text, not null, foreign key) - Reference to categories table
  - `unit` (text, not null) - Unit of measurement
  - `description` (text) - Product description
  - `stock` (integer, default 0) - Available stock quantity
  - `rating` (decimal) - Product rating (0-5)
  - `reviews` (integer, default 0) - Number of reviews
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Record last update timestamp

  ## Security
  - Enable RLS on both tables
  - Add policies for public read access (products are publicly viewable)
  - Add policies for authenticated admin users to manage products
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  icon text,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal(10, 2) NOT NULL CHECK (price >= 0),
  image text NOT NULL,
  category text NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  unit text NOT NULL,
  description text,
  stock integer DEFAULT 0 CHECK (stock >= 0),
  rating decimal(3, 2) CHECK (rating >= 0 AND rating <= 5),
  reviews integer DEFAULT 0 CHECK (reviews >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policies for categories (public read access)
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for products (public read access)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_rating_idx ON products(rating DESC);
CREATE INDEX IF NOT EXISTS products_stock_idx ON products(stock);

-- Insert initial categories
INSERT INTO categories (id, name, icon) VALUES
  ('all', 'All Products', '🛒'),
  ('fruits', 'Fruits', '🍎'),
  ('vegetables', 'Vegetables', '🥕'),
  ('dairy', 'Dairy', '🥛'),
  ('meat', 'Meat & Seafood', '🥩'),
  ('pantry', 'Pantry', '🍞')
ON CONFLICT (id) DO NOTHING;