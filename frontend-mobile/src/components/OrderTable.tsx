import { JSX } from "react";
import { Text, View, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { useCart, CartItem } from "../contexts/CartContext";
import { useBottomTabBarHeight } from "react-native-bottom-tabs";
import { getProduct, getCategoryLabel, getInclVatPrice } from "../api/mock";
import { styles } from "../styles";

interface OrderTableProps {
    items?: CartItem[];
    totalExclTax?: number;
    totalTax?: number;
    totalInclTax?: number;
    count?: number;
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
        <View style={styles.flexContainer}>
            <View style={styles.listHeader}>
                <Text style={styles.columnHeaderArticle}>ARTICLES</Text>
                <Text style={styles.columnHeaderDescription}>DESCRIPTION</Text>
                <Text style={styles.columnHeaderPrice}>PRIX</Text>
            </View>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.productId.toString()}
                style={styles.flexContainer}
                contentContainerStyle={styles.orderTableListContent}
                scrollEnabled={isCart} // pas sûr
            />

            <View style={[styles.summaryContainer, { paddingBottom: 20 + (isCart ? tabBarHeight : 0) }]}>
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
                    <TouchableOpacity style={styles.orderButton} onPress={() => {
                        Alert.alert("Échec du payement", "Le payement a échoué. Veuillez réessayer.");
                    }}>
                        <Text style={styles.orderButtonText}>Order</Text>
                    </TouchableOpacity>
                : null}
            </View>
        </View>
    );
}
