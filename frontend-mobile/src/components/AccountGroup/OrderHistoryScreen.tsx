import { JSX } from 'react';
import { Text, View } from 'react-native';

export default function OrderHistoryScreen() : JSX.Element {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Historique des commandes !</Text>
        </View>
    );
}
