import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Fresh Bananas',
    price: 1.99,
    image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fruits',
    unit: 'per bunch',
    description: 'Sweet, ripe bananas perfect for snacking or baking.',
    stock: 50,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Red Apples',
    price: 3.49,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fruits',
    unit: 'per lb',
    description: 'Crisp and juicy red apples, perfect for snacking.',
    stock: 30,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Fresh Oranges',
    price: 2.99,
    image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fruits',
    unit: 'per lb',
    description: 'Sweet and tangy oranges, rich in vitamin C.',
    stock: 45,
    rating: 4.6,
    reviews: 67
  },
  {
    id: '4',
    name: 'Fresh Strawberries',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fruits',
    unit: 'per container',
    description: 'Sweet, juicy strawberries perfect for desserts.',
    stock: 25,
    rating: 4.9,
    reviews: 156
  },
  
  // Vegetables
  {
    id: '5',
    name: 'Fresh Carrots',
    price: 1.79,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetables',
    unit: 'per bunch',
    description: 'Crisp, fresh carrots perfect for cooking or snacking.',
    stock: 40,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'Fresh Broccoli',
    price: 2.49,
    image: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetables',
    unit: 'per head',
    description: 'Fresh, green broccoli packed with nutrients.',
    stock: 35,
    rating: 4.4,
    reviews: 92
  },
  {
    id: '7',
    name: 'Bell Peppers',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetables',
    unit: 'per pack',
    description: 'Colorful bell peppers, great for cooking and salads.',
    stock: 28,
    rating: 4.6,
    reviews: 45
  },
  {
    id: '8',
    name: 'Fresh Spinach',
    price: 2.99,
    image: 'https://images.pexels.com/photos/2328111/pexels-photo-2328111.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetables',
    unit: 'per bag',
    description: 'Fresh baby spinach leaves, perfect for salads.',
    stock: 22,
    rating: 4.7,
    reviews: 63
  },
  
  // Dairy
  {
    id: '9',
    name: 'Organic Milk',
    price: 4.49,
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'dairy',
    unit: 'per gallon',
    description: 'Fresh organic whole milk from grass-fed cows.',
    stock: 20,
    rating: 4.8,
    reviews: 134
  },
  {
    id: '10',
    name: 'Fresh Eggs',
    price: 3.99,
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'dairy',
    unit: 'per dozen',
    description: 'Farm-fresh eggs from free-range chickens.',
    stock: 30,
    rating: 4.9,
    reviews: 87
  },
  {
    id: '11',
    name: 'Greek Yogurt',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'dairy',
    unit: 'per container',
    description: 'Creamy Greek yogurt, high in protein.',
    stock: 18,
    rating: 4.7,
    reviews: 76
  },
  {
    id: '12',
    name: 'Cheddar Cheese',
    price: 6.99,
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'dairy',
    unit: 'per block',
    description: 'Sharp cheddar cheese, perfect for sandwiches.',
    stock: 15,
    rating: 4.6,
    reviews: 54
  },
  
  // Meat
  {
    id: '13',
    name: 'Chicken Breast',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'meat',
    unit: 'per lb',
    description: 'Fresh, boneless chicken breast.',
    stock: 12,
    rating: 4.8,
    reviews: 143
  },
  {
    id: '14',
    name: 'Ground Beef',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'meat',
    unit: 'per lb',
    description: 'Fresh ground beef, 80/20 lean.',
    stock: 18,
    rating: 4.7,
    reviews: 98
  },
  {
    id: '15',
    name: 'Salmon Fillet',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'meat',
    unit: 'per lb',
    description: 'Fresh Atlantic salmon fillet.',
    stock: 10,
    rating: 4.9,
    reviews: 67
  },
  
  // Pantry
  {
    id: '16',
    name: 'Whole Wheat Bread',
    price: 2.99,
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pantry',
    unit: 'per loaf',
    description: 'Fresh whole wheat bread, perfect for sandwiches.',
    stock: 25,
    rating: 4.5,
    reviews: 112
  },
  {
    id: '17',
    name: 'Olive Oil',
    price: 8.99,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'pantry',
    unit: 'per bottle',
    description: 'Extra virgin olive oil, cold-pressed.',
    stock: 20,
    rating: 4.8,
    reviews: 89
  },
  {
    id: '18',
    name: 'Jasmine Rice',
    price: 4.99,
    image: 'https://images.pexels.com/photos/3920617/pexels-photo-3920617.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pantry',
    unit: 'per bag',
    description: 'Premium jasmine rice, aromatic and fluffy.',
    stock: 30,
    rating: 4.7,
    reviews: 145
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '🛒' },
  { id: 'fruits', name: 'Fruits', icon: '🍎' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
  { id: 'meat', name: 'Meat & Seafood', icon: '🥩' },
  { id: 'pantry', name: 'Pantry', icon: '🍞' }
];