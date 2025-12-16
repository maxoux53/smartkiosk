export type user = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string | null;
    is_admin: boolean;
};

export type cashier = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string | null;
};

export type membership = {
    user_id: number;
    event_id: number;
    role: string;
};

export type event = {
    id: number;
    name: string;
    location: string;
    is_active: boolean;
    image: string | null;
    iban: string;
};

export type purchase = {
    id: number;
    date: Date;
    user_id: number;
};

export type order_line = {
    product_id: number;
    purchase_id: number;
    quantity: number;
    price: number;
};

export type product = {
    id: number;
    label: string;
    is_available: boolean;
    excl_vat_price: string;
    picture: string | null;
    category_id: number;
    event_id: number | null;
};

export type productForManager = {
    id: number;
    label: string;
    is_available: boolean;
    excl_vat_price: string;
    picture: string | null;
    category_id: number;
};

export type category = {
    id: number;
    label: string;
    vat_type: string;
    picture: string;
};

export type vat = {
    type: string;
    rate: number;
};

export type pagination = {
    pageIndex: number;
    pageSize: number;
};
