import { JSX } from "react";
import { Text, View, Image } from "react-native";

export default function EventNameHeader(): JSX.Element {
    return (
        <View style={{ borderRadius: 8, overflow: 'hidden', }}>
            <Image source={{ uri: '/Users/max/Documents/GitHub/smartkiosk/frontend-mobile/src/assets/void.png' }} style={{ opacity: 0.3,}}/>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black'}}>Nom de l'événement</Text>
        </View>
    );
}