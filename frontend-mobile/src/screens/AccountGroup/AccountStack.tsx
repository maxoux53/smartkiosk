import { JSX } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountStackParamList } from "../../types/navigation.ts";

import LoginScreen from "./LoginScreen.tsx";
import ProfileScreen from "./ProfileScreen.tsx";
import OrderHistoryScreen from "./OrderHistoryScreen.tsx";

const Stack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountStack(): JSX.Element {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                //options={{ unmountOnBlur: true }}
                name="Login"
                component={LoginScreen}
            />

            <Stack.Screen
                //options={{ unmountOnBlur: true }}
                name="Profile"
                component={ProfileScreen}
            />

            <Stack.Screen
                //options={{ unmountOnBlur: true }}
                name="OrderHistory"
                component={OrderHistoryScreen}
            />
        </Stack.Navigator>
    );
}
