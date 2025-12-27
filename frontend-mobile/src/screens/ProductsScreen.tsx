import { useState, type JSX } from "react";
import { Text, View } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { styles } from "../styles";
import EventNameHeader from "../components/EventNameHeader";

export default function ProductsScreen(): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const PLACEHOLDER_PRODUCTS = [
        { 
            id: '1', 
            name: 'Radis', 
            price: 10.99, 
            image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            id: '2', 
            name: 'Champignons', 
            price: 10.99, 
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        { 
            id: '3', 
            name: 'Cerises', 
            price: 10.99, 
            image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <View style={styles.container}>
            <EventNameHeader />

            <SegmentedControl
                values={["Boisson", "Alimentaire"]}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                tintColor="lightgray"
                style={{ width: "100%", marginVertical: 12 }} // ou selfAlign
            />

            <Text>Produits! Index sélectionné: {selectedIndex}</Text>
        </View>
    );
}
