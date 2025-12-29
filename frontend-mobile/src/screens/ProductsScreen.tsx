import { useState, type JSX } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { styles } from "../styles";
import EventNameHeader from "../components/EventNameHeader";
import ProductList from "../components/ProductList";
import { Product } from "../types/items";
import { PRODUCTS, CATEGORIES } from "../api/mock";

export default function ProductsScreen(): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const productsByCategory: Array<Product[]> = Array.from({ length: CATEGORIES.length }, () => []);
    for (const product of PRODUCTS) {
        productsByCategory[product.category_id-1].push(product);
    }

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <EventNameHeader name="Nom de l'événement" />

            <SegmentedControl
                values={CATEGORIES.map(c => c.label)}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                tintColor="white"
                style={{ width: "70%", marginVertical: 20 }}
            />

            <ProductList products={productsByCategory[selectedIndex]} />
        </SafeAreaView>
    );
}
