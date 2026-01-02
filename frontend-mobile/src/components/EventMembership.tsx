import { JSX } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles";
import { EVENTS } from "../api/mock";
import { useAuth } from "../contexts/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventMembership(): JSX.Element {
    const { leaveEvent } = useAuth();
    const event = EVENTS[0]; // à remplacer par l'event actuel de l'utilisateur

    return (
        <SafeAreaView style={styles.container}>
            <View style={localStyles.contentContainer}>
                <Text style={localStyles.subtitle}>Vous avez rejoint l'événement :</Text>
                <Text style={[styles.title, localStyles.titleSpacing]}>{event.name}</Text>
                
                <Image 
                    source={{ uri: event.picture }} 
                    style={localStyles.image}
                    resizeMode="cover"
                />

                <TouchableOpacity style={[styles.button, { marginTop: 60 }]} onPress={leaveEvent}>
                    <Text style={[styles.buttonText, { textAlign: "center" }]}>Quitter l'évènement</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const localStyles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    subtitle: {
        fontSize: 18,
        color: "#000",
        textAlign: "center",
        fontWeight: "400",
    },
    titleSpacing: {
        marginTop: 10,
        marginBottom: 40,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 8,
        backgroundColor: '#E5E5EA',
    }
});
