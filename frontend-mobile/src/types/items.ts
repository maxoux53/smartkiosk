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