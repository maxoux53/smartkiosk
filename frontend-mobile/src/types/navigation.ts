import { NavigatorScreenParams } from '@react-navigation/native';

// Types for the Account Stack Navigator
export type AccountStackParamList = {
  Profile: { screen: string } | undefined;
  OrderHistory: { screen: string } | undefined;
};

// Types for the Tab Navigator
export type TabParamList = {
  Evenements: undefined;
  Produits: undefined;
  Commande: undefined;
  Compte: NavigatorScreenParams<AccountStackParamList>;
};

// Root navigation type
export type RootStackParamList = TabParamList;