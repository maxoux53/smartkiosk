import { JSX } from "react";
import { Text, View, FlatList } from "react-native";
import OrderTable from "../../components/OrderTable";
import { ORDERS } from "../../api/mock";
import { Order } from "../../types/items";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles";


export default function OrderHistoryScreen(): JSX.Element {
    const renderOrder = ({ item }: { item: Order }) => (
        <View style={styles.orderContainer}>
            <View style={styles.headerRow}>
                <Text style={styles.orderTitle}>{item.id} ({item.eventName})</Text>
                <Text style={styles.orderDate}>{item.date}</Text>
            </View>
            <OrderTable 
                items={item.items}
                totalExclTax={item.totalExclTax}
                totalTax={item.totalTax}
                totalInclTax={item.totalInclTax}
                count={item.count}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.whiteContainer} edges={["top"]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Historique des commandes</Text>
            </View>

            <FlatList
                data={ORDERS}
                renderItem={renderOrder}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
