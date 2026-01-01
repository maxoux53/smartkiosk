import { Product, Category, VAT, Order } from "../types/items";

export const VATS: VAT[] = [
    { type: 'A', rate: 5 },
    { type: 'B', rate: 20 }
];

export const CATEGORIES: Category[] = [
    { id: 1, label: 'Fruits & Légumes', type: 'A' },
    { id: 2, label: 'Boissons', type: 'B' }
];

export const PRODUCTS: Product[] = [
    { 
        id: 1, 
        label: 'Radis', 
        excl_vat_price: 10.47, 
        picture: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category_id: 1
    },
    { 
        id: 2, 
        label: 'Champignons', 
        excl_vat_price: 10.47, 
        picture: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category_id: 1
    },
    { 
        id: 3, 
        label: 'Cerises', 
        excl_vat_price: 10.47, 
        picture: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category_id: 1
    },
    { 
        id: 4, 
        label: 'Jus d\'orange', 
        excl_vat_price: 4.991, 
        picture: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category_id: 2
    },
    { 
        id: 5, 
        label: 'Café', 
        excl_vat_price: 3.325, 
        picture: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category_id: 2
    },
    { 
        id: 6, 
        label: 'Thé glacé', 
        excl_vat_price: 4.158, 
        picture: 'https://plus.unsplash.com/premium_photo-1663840075252-0cef798abc16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category_id: 2
    }
];

export const ORDERS: Order[] = [
    {
        id: "R8762111",
        eventName: "Bunker",
        date: "21/06/25",
        items: [
            { productId: 1, quantity: 1 }, // Radis
            { productId: 2, quantity: 1 }  // Champignons
        ],
        totalExclTax: 19.98,
        totalTax: 2.00,
        totalInclTax: 21.98,
        count: 2
    },
    {
        id: "R8744112",
        eventName: "24H LLN",
        date: "21/06/25",
        items: [
            { productId: 1, quantity: 1 } // Radis
        ],
        totalExclTax: 10.99,
        totalTax: 1.00,
        totalInclTax: 11.99,
        count: 1
    }
];

export const getProduct = (productId: number): Product => { // TEMPORAIRE EN ATTENDANT L'API
    return PRODUCTS.find(p => p.id === productId)!;
};
  
export const getCategoryLabel = (categoryId: number): string => { // TEMPORAIRE EN ATTENDANT L'API
    return CATEGORIES.find(c => c.id === categoryId)?.label || 'category.label';
};

export const getVatRate = (categoryId: number): number => { // TEMPORAIRE EN ATTENDANT L'API
    const category = CATEGORIES.find(c => c.id === categoryId);
    const vat = VATS.find(v => v.type === category!.type);
    return vat!.rate;
};

export const getInclVatPrice = (productId: number): number => { // TEMPORAIRE EN ATTENDANT L'API
    const product = getProduct(productId);
    const vatRate = getVatRate(product.category_id);
    return product.excl_vat_price * (1 + vatRate / 100);
};
