import { JSX } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SymbolView } from "expo-symbols";
import { styles } from "../styles";
import { useAuth } from "../contexts/AuthContext";

export default function JoinEventLanding(): JSX.Element {
    const { joinEvent } = useAuth();
    
    return (
        <View style={styles.container}>
            <SymbolView 
                name="qrcode" 
                size={300} 
                tintColor="black" 
                type="monochrome"
            />
            
            <Text style={styles.title}>Rejoindre un évènement</Text>
            <Text style={styles.description}>
                Scannez un code QR pour rejoindre un évènement
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => { joinEvent(); }}>
                <SymbolView name="camera.viewfinder" size={20} tintColor="white" />
                <Text style={styles.buttonText}>Scanner un code QR</Text>
            </TouchableOpacity>
        </View>
    );
}
