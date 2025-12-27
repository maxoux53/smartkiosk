import { JSX } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Product } from "../types/items";

export default function ProductList(props: { products: Product[] }): JSX.Element {

    const afficheProduits = (item: Product) => (
        <View style={{width: '48%'}}>
            <Image 
                source={{ uri: item.image }} 
                style={{width: '100%', aspectRatio: 1, borderRadius: 12, marginBottom: 8}} 
            />
            <Text style={{fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.price}€</Text>
        </View>
    );

    return (
        <FlatList
            data={props.products}
            numColumns={2}
            renderItem={({ item }) => afficheProduits(item)}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}}
            showsVerticalScrollIndicator={false}
        />
    );
}
