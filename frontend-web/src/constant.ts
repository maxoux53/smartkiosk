export const ADMIN_TABLES: Record<string, string> = {
    USERS: "Utilisateurs",
    MEMBERSHIPS: "Participations",
    EVENTS: "Évènements",
    PURCHASES: "Achats",
    ORDER_LINES: "Lignes de commandes",
    PRODUCTS: "Produits",
    CATEGORIES: "Catégories",
    VATS: "TVA"
};

export const MANAGER_TABLES: Record<string, string> = {
    EVENT: "Évènement", // Only his event
    USERS: "Utilisateurs", // Read only
    MEMBERSHIPS: "Participations",
    PURCHASES: "Achats",
    ORDER_LINES: "Lignes de commandes",
    PRODUCTS: "Produits",
}