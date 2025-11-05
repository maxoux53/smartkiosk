import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

type SegmentedControlChangeEvent = {
  nativeEvent: {
    selectedSegmentIndex: number;
  };
};

const Tab = createNativeBottomTabNavigator();

function EventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Événements!</Text>
    </View>
  );
}

function ProductsScreen() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SegmentedControl
        values={['Tous', 'Catégorie 1', 'Catégorie 2']}
        selectedIndex={selectedIndex}
        onChange={(event: SegmentedControlChangeEvent) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text>Produits! Index sélectionné: {selectedIndex}</Text>
    </View>
  );
}

function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Commande!</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Compte!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Evenements"
          component={EventsScreen}
          options={{
            tabBarIcon: () => ({ sfSymbol: 'calendar' })
          }}
        />
        <Tab.Screen
          name="Produits"
          component={ProductsScreen}
          options={{
            tabBarIcon: () => ({ sfSymbol: 'takeoutbag.and.cup.and.straw.fill' })
          }}
        />
        <Tab.Screen
          name="Commande"
          component={OrderScreen}
          options={{
            tabBarIcon: () => ({ sfSymbol: 'cart.badge.clock.fill' })
          }}
        />
        <Tab.Screen
          name="Compte"
          component={AccountScreen}
          options={{
            tabBarIcon: () => ({ sfSymbol: 'person.crop.circle.fill' })
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}