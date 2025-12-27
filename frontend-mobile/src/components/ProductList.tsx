import { JSX } from "react";
import { Text, View, Image, FlatList } from "react-native";

export default function ProductList(): JSX.Element {

    type Product = {
        id: string;
        name: string;
        price: number;
        image: string;
    };

    const afficheProduits = ({ product }: { product: Product }) => (
        <View>
            <Image source={{ uri: product.image }} />
            
        </View>
    );

    return (
        <View />
    );
}