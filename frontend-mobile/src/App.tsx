import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./components/TabBar"; // peut-être à ne pas faire en composant et le metre directement dans NavigationContainer ici

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
