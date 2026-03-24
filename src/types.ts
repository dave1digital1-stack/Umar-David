export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Burgers' | 'Fries' | 'Drinks' | 'Breakfast' | 'Desserts';
  image: string;
  popular?: boolean;
  dietary?: ('Vegetarian' | 'Spicy' | 'New')[];
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  discount: string;
  expiryDate: string;
  image: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'All Day';
}

export interface Store {
  id: string;
  name: string;
  address: string;
  distance: string;
  isOpen: boolean;
  coordinates: { lat: number; lng: number };
}
