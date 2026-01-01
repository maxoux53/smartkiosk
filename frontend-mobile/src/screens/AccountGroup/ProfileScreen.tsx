import { JSX } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SymbolView } from "expo-symbols";
import { AccountStackParamList } from "../../types/navigation";
import { styles } from "../../styles";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfileScreen(): JSX.Element {
    const navigation: NativeStackNavigationProp<AccountStackParamList> = useNavigation();
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <SymbolView
                name="person.crop.square.badge.camera"
                size={200}
                type="monochrome"
                tintColor="black"
            />
            
            <Text style={styles.title}>Prénom Nom</Text>
            <Text style={styles.profileEmail}>pnom@smart.dossier</Text>

            <View style={{ height: 80 }} /> 

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("OrderHistory")}
            >
                <Text style={styles.buttonText}>Historique des commandes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={logout}
            >
                <Text style={styles.logoutText}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    );
}
