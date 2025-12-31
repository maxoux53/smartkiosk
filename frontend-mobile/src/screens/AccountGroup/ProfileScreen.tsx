import { JSX } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SymbolView } from "expo-symbols";
import { AccountStackParamList } from "../../types/navigation";
import { styles as globalStyles } from "../../styles";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfileScreen(): JSX.Element {
    const navigation: NativeStackNavigationProp<AccountStackParamList> = useNavigation();
    const { logout } = useAuth();

    return (
        <View style={globalStyles.container}>
            <SymbolView
                name="person.crop.square.badge.camera"
                size={200}
                type="monochrome"
                tintColor="black"
            />
            
            <Text style={globalStyles.title}>Prénom Nom</Text>
            <Text style={localStyles.email}>pnom@smart.dossier</Text>

            <View style={{ height: 80 }} /> 

            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate("OrderHistory")}
            >
                <Text style={globalStyles.buttonText}>Historique des commandes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={localStyles.logoutButton}
                onPress={logout}
            >
                <Text style={localStyles.logoutText}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    email: {
        fontSize: 18,
        color: "#8E8E93",
        marginTop: 10,
        textAlign: "center",
    },
    logoutButton: {
        marginTop: 30,
        padding: 10,
    },
    logoutText: {
        fontSize: 17,
        color: "#3C3C4399",
        textAlign: "center",
    }
});
