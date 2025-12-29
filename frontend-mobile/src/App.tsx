import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { CartProvider } from './contexts/CartContext';

import TabNavigator from "./screens/TabBar"; // peut-être à ne pas faire en composant et le metre directement dans NavigationContainer ici

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <BottomSheetModalProvider>
                    <CartProvider>
                        <NavigationContainer>
                            <TabNavigator />
                        </NavigationContainer>
                    </CartProvider>
                </BottomSheetModalProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
