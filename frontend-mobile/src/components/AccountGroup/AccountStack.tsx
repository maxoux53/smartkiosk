import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './ProfileScreen.tsx';
import OrderHistoryScreen from './OrderHistoryScreen.tsx';
import { AccountStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountStack() {
  return (
    <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        initialParams={{ screen: 'Profile' }}
        //options={{ unmountOnBlur: true }}
        name="Profile"
        component={ProfileScreen}
      />

      <Stack.Screen
        initialParams={{ screen: 'OrderHistory' }}
        //options={{ unmountOnBlur: true }}
        name="OrderHistory"
        component={OrderHistoryScreen}
      />
    </Stack.Navigator>
  );
};
