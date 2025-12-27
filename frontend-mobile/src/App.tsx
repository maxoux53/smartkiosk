import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

import TabNavigator from "./screens/TabBar"; // peut-être à ne pas faire en composant et le metre directement dans NavigationContainer ici

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}
