import { JSX, useRef, useState } from "react";
import { Text, Image, FlatList, TouchableOpacity } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Product } from "../types/items";
import { ProductBottomSheet } from "../components/ProductBottomSheet";

export default function ProductList(props: { products: Product[] }): JSX.Element {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductPress = (item: Product) => {
        setSelectedProduct(item);
        bottomSheetRef.current?.present();
    };

    const afficheProduits = (item: Product) => (
        <TouchableOpacity style={{width: '48%'}} onPress={() => handleProductPress(item)}>
            <Image 
                source={{ uri: item.image }} 
                style={{width: '100%', aspectRatio: 1, borderRadius: 12, marginBottom: 8}} 
            />
            <Text style={{fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.price}€</Text>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={props.products}
                numColumns={2}
                renderItem={({ item }) => afficheProduits(item)}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}}
                showsVerticalScrollIndicator={false}
            />
            <ProductBottomSheet ref={bottomSheetRef} product={selectedProduct} />
        </>
    );
}
