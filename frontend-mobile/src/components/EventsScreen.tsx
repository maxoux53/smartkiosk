import { JSX } from 'react';
import { Text, View } from 'react-native';

export default function EventsScreen() : JSX.Element {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Événements!</Text>
        </View>
    );
}
