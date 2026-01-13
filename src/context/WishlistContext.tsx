import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setItems(prevItems => {
      const exists = prevItems.some(item => item.id === product.id);
      if (!exists) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id);
  };

  const value: WishlistContextType = {
    items,
    addItem,
    removeItem,
    clearWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
