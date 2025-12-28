import { useState, type JSX } from "react";
import { View } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { styles } from "../styles";
import EventNameHeader from "../components/EventNameHeader";
import ProductList from "../components/ProductList";
import { Product } from "../types/items";
import ProductBottomSheet from "../components/ProductBottomSheet";

export default function ProductsScreen(): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const PLACEHOLDER_PRODUCTS : Product[][] = [[
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
        ], [
            { 
                id: '4', 
                name: 'Jus d\'orange', 
                price: 5.99, 
                image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            { 
                id: '5', 
                name: 'Café', 
                price: 3.99, 
                image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            { 
                id: '6', 
                name: 'Thé glacé', 
                price: 4.99, 
                image: 'https://plus.unsplash.com/premium_photo-1663840075252-0cef798abc16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ]
    ];

    return (
        <View style={styles.container}>
            <EventNameHeader name="Nom de l'événement" />

            <SegmentedControl
                values={["Boisson", "Alimentaire"]}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                tintColor="white"
                style={{ width: "70%", marginVertical: 20 }}
            />

            <ProductList products={PLACEHOLDER_PRODUCTS[selectedIndex]} />

            <ProductBottomSheet />
        </View>
    );
}
