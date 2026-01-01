import { JSX } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import OrderTable from "../../components/OrderTable";
import { ORDERS } from "../../api/mock";
import { Order } from "../../types/items";
import { SafeAreaView } from "react-native-safe-area-context";


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
                style={styles.orderTable}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Historique des commandes</Text>
            </View>

            <FlatList
                data={ORDERS}
                renderItem={renderOrder}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    listContent: {
        paddingBottom: 20,
    },
    orderContainer: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 0,
    },
    orderTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderTable: {
        flex: 0,
    },
    header: {
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
