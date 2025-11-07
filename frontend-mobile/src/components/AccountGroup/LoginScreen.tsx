import { JSX } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountStackParamList } from '../../types/navigation';

export default function LoginScreen() : JSX.Element {
    const navigation : NativeStackNavigationProp<AccountStackParamList> = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Connexion !</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}
