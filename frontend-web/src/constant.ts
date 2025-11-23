// Confirmer l'utilisation

export const TABLES: Record<string, string> = {
    USERS: "Utilisateurs",
    MEMBERSHIPS: "Participations",
    EVENTS: "Évènements",
    PURCHASES: "Achats",
    ORDER_LINES: "Lignes de commandes",
    PRODUCTS: "Produits",
    CATEGORIES: "Catégories",
    VATS: "TVA"
};

export const USERS_ATTRIBUTES: Record<string, string> = {
    id: "ID",
    first_name: "Prénom",
    last_name: "Nom",
    email: "Email",
    password: "Mot de passe",
    avatar: "Avatar",
    is_admin: "Est admin",
    deletion_date: "Date de suppression"
};
