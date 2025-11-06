import { JSX } from 'react';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';

import EventsScreen from './EventsScreen';
import ProductsScreen from './ProductsScreen';
import OrderScreen from './OrderScreen';
import AccountScreen from './AccountGroup/AccountStack';
import { TabParamList } from '../types/navigation';

const Tab = createNativeBottomTabNavigator<TabParamList>();


export default function TabBar() : JSX.Element {
    return (
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
    );
}
