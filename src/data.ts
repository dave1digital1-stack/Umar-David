import { MenuItem, Deal, Store } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Big Mac',
    description: 'Two 100% beef patties, a slice of cheese, lettuce, onion and pickles.',
    price: 2800,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'b2',
    name: 'McSpicy Chicken',
    description: 'Crispy chicken thigh with spicy coating, lettuce and mayo.',
    price: 2500,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&q=80&w=800',
    dietary: ['Spicy'],
    popular: true,
  },
  {
    id: 'f1',
    name: 'World Famous Fries',
    description: 'Crispy, golden and perfectly salted.',
    price: 1200,
    category: 'Fries',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'd1',
    name: 'Coca-Cola',
    description: 'Refreshing classic cola taste.',
    price: 800,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'br1',
    name: 'Egg McMuffin',
    description: 'Freshly cracked egg, Canadian bacon and melted cheese.',
    price: 1800,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=800',
  },
];

export const DEALS: Deal[] = [
  {
    id: 'd1',
    title: 'Lunch Special',
    description: 'Get a Big Mac Meal for a special price.',
    discount: '20% OFF',
    expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
    category: 'Lunch',
  },
  {
    id: 'd2',
    title: 'Breakfast Bundle',
    description: '2 Egg McMuffins + 2 Coffees.',
    discount: '₦1000 OFF',
    expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
  },
];

export const STORES: Store[] = [
  {
    id: 's1',
    name: 'McDonald\'s Heritage Mall',
    address: 'Dugbe, Ibadan, Oyo State',
    distance: '1.2 km',
    isOpen: true,
    coordinates: { lat: 7.3875, lng: 3.8844 },
  },
  {
    id: 's2',
    name: 'McDonald\'s Palms Mall',
    address: 'Ring Road, Ibadan, Oyo State',
    distance: '3.5 km',
    isOpen: true,
    coordinates: { lat: 7.3484, lng: 3.8675 },
  },
];
