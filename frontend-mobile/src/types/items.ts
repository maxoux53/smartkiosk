export type Product = {
    id: number;
    label: string;
    excl_vat_price: number;
    picture: string;
    category_id: number;
};

export type Category = {
    id: number;
    label: string;
    type: string;
};

export type VAT = {
    type: string;
    rate: number;
};

export type OrderItem = {
    productId: number;
    quantity: number;
};

export type Order = {
    id: string;
    eventName: string;
    date: string;
    items: OrderItem[];
    totalExclTax: number;
    totalTax: number;
    totalInclTax: number;
    count: number;
};