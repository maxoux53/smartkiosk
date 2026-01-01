import { JSX } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderTable from "../components/OrderTable";

export default function OrderScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Commande</Text>
            </View>

            <OrderTable />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ // souk à trier
    container: {
        flex: 1,
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
    },
});
