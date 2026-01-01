import { JSX } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ViewStyle } from "react-native";
import { useCart, CartItem } from "../contexts/CartContext";
import { useBottomTabBarHeight } from "react-native-bottom-tabs";
import { getProduct, getCategoryLabel, getInclVatPrice } from "../api/mock";

interface OrderTableProps {
    items?: CartItem[];
    totalExclTax?: number;
    totalTax?: number;
    totalInclTax?: number;
    count?: number;
    style?: ViewStyle;
}

export default function OrderTable(props: OrderTableProps = {}): JSX.Element {
    const cart = useCart();
    const tabBarHeight = useBottomTabBarHeight();

    const isCart = !props.items;

    const items = props.items ?? cart.items;
    const totalExclTax = props.totalExclTax ?? cart.totalExclTax();
    const totalTax = props.totalTax ?? cart.totalTax();
    const totalInclTax = props.totalInclTax ?? cart.totalInclTax();
    const count = props.count ?? cart.count();
    const style = props.style ?? {};

    const renderItem = ({ item }: { item: CartItem }) => {
        const product = getProduct(item.productId);

        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: product.picture }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemCategory}>{getCategoryLabel(product.category_id)}</Text>
                    <Text style={styles.itemName}>{product.label}</Text>
                    <Text style={styles.itemQuantity}>x{item.quantity}</Text>
                </View>
                <Text style={styles.itemPrice}>{(item.quantity * getInclVatPrice(product.id)).toFixed(2)}€</Text>
            </View>
        );
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.listHeader}>
                <Text style={styles.columnHeaderArticle}>ARTICLES</Text>
                <Text style={styles.columnHeaderDescription}>DESCRIPTION</Text>
                <Text style={styles.columnHeaderPrice}>PRIX</Text>
            </View>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.productId.toString()}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                scrollEnabled={!isCart}
            />

            <View style={[styles.summaryContainer, { paddingBottom: 20 + tabBarHeight }]}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Sous-total ({count})</Text>
                    <Text style={styles.summaryValue}>{totalExclTax.toFixed(2)}€</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>TVA</Text>
                    <Text style={styles.summaryValue}>{totalTax.toFixed(2)}€</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>{totalInclTax.toFixed(2)}€</Text>
                </View>

                {isCart ?
                    <TouchableOpacity style={styles.orderButton}>
                        <Text style={styles.orderButtonText}>Order</Text>
                    </TouchableOpacity>
                : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listHeader: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    columnHeaderArticle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        width: 80, 
    },
    columnHeaderDescription: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        flex: 1,
    },
    columnHeaderPrice: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
    },
    listContent: {
        paddingHorizontal: 20,
    },
    list: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'flex-start',
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    itemCategory: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    itemQuantity: {
        fontSize: 14,
        color: '#000',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    summaryContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#333',
    },
    summaryValue: {
        fontSize: 16,
        fontWeight: '500',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderButton: {
        backgroundColor: 'black',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    orderButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
