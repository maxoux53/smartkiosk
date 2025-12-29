import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types/items';
import { PRODUCTS, CATEGORIES, VATS } from '../api/mock';

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalExclTax: () => number;
  totalTax: () => number;
  totalInclTax: () => number;
  count: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (productId: number, quantity: number) => {
    if (quantity <= 0) return;

    if (items.find(item => item.productId === productId)) {
      setItems(prevItems =>
        prevItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setItems([...items, { productId, quantity }]);
    }

    return;
  };

  const removeFromCart = (productId: number) => {
    const productIndex = items.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
      setItems(items.splice(productIndex, 1));
    }
    
    return;
  };

  const clearCart = (): void => {
    setItems([]);
  };

  const getProductPriceExclTax = (productId: number): number => {
    const product = PRODUCTS.find(p => p.id === productId);
    return product ? product.excl_vat_price : 0;
  }

  const totalExclTax = (): number => {
    let total = 0;

    for (const item of items) {
      total += getProductPriceExclTax(item.productId) * item.quantity;
    }

    return total;
  }

  const getProductTaxRate = (productId: number): number => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return 0;
    const category = CATEGORIES.find(c => c.id === product.category_id);
    if (!category) return 0;
    const vat = VATS.find(v => v.type === category.type);
    return vat ? vat.rate : 0;
  }

  const totalTax = (): number => {
    let total = 0;

    for (const item of items) {
      total += getProductPriceExclTax(item.productId) * (getProductTaxRate(item.productId) / 100) * item.quantity;
    }

    return total;
  }

  const totalInclTax = (): number => {
    let total = 0;

    for (const item of items) {
      total += (getProductPriceExclTax(item.productId) * (1 + (getProductTaxRate(item.productId) / 100))) * item.quantity;
    }

    return total;
  }

  const count = (): number => {
    return items.length;
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalExclTax, totalTax, totalInclTax, count }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart ne fonctionne que dans un CartProvider');
  }

  return context;
};
