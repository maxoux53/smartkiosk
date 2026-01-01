import { JSX } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderTable from "../components/OrderTable";
import { styles } from "../styles";

export default function OrderScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.flexContainer} edges={["top"]}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Commande</Text>
            </View>

            <OrderTable />
        </SafeAreaView>
    );
}

