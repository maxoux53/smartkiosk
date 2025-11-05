import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountStackParamList } from '../../types/navigation';

export default function ProfileScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile !</Text>
            <Button title="Go to Order History" onPress={() => navigation.navigate('OrderHistory')} />
        </View>
    );
}
