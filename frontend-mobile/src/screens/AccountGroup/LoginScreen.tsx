import { type JSX, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as AppleAuthentication from "expo-apple-authentication";
import { AccountStackParamList } from "../../types/navigation";
import { styles as globalStyles } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen(): JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const appleAuthAvailable = Platform.OS === 'ios'; // AppleAuthentication.isAvailableAsync();

    const handleAppleSignIn = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });
            console.log(credential);
            // TODO: Handle successful login (e.g., send token to backend)
            login();
            navigation.navigate("Profile");
        } catch (e) {
            if ((e as { code: string }).code === "ERR_REQUEST_CANCELED") {
                // l'utilisateur a fermé la popup de connexion
            } else {
                console.error(e);
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <KeyboardAvoidingView>
                <View style={localStyles.headerContainer}>
                    <Text style={localStyles.appTitle}>SmartKiosk</Text>
                </View>

                <View style={localStyles.formContainer}>
                    <Text style={localStyles.sectionTitle}>
                        Se connecter
                    </Text>

                    <TextInput
                        style={localStyles.input}
                        placeholder="mail@domaine.be"
                        placeholderTextColor="#C7C7CC"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={localStyles.input}
                        placeholder="Mot de passe"
                        placeholderTextColor="#C7C7CC"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={[
                            globalStyles.button,
                            localStyles.continueButton,
                        ]}
                        onPress={() => {
                            login();
                            navigation.navigate("Profile");
                        }}
                    >
                        <Text style={globalStyles.buttonText}>
                            Continuer
                        </Text>
                    </TouchableOpacity>

                    <View style={localStyles.separatorContainer}>
                        <View style={localStyles.separatorLine} />
                        <Text style={localStyles.separatorText}>ou</Text>
                        <View style={localStyles.separatorLine} />
                    </View>

                    {appleAuthAvailable ? (
                        <AppleAuthentication.AppleAuthenticationButton
                            buttonType={
                                AppleAuthentication.AppleAuthenticationButtonType
                                    .SIGN_IN
                            }
                            buttonStyle={
                                AppleAuthentication.AppleAuthenticationButtonStyle
                                    .WHITE_OUTLINE
                            }
                            cornerRadius={14}
                            style={localStyles.appleButton}
                            onPress={handleAppleSignIn}
                        />
                    ) : null}

                    <TouchableOpacity
                        style={localStyles.createAccountButton}
                    >
                        <Text style={localStyles.createAccountText}>
                            Créer un compte
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={localStyles.footer}>
                    <Text style={localStyles.footerText}>
                        En cliquant sur continuer, vous acceptez nos
                        <Text style={localStyles.bold}> CGU</Text> et
                        <Text style={localStyles.bold}> Politique de confidentialité
                        </Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const localStyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingBottom: 20,
    },
    headerContainer: {
        marginTop: 60,
        alignItems: "center",
    },
    appTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#000",
    },
    formContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 40,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 30,
        color: "#000",
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#E5E5EA",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    continueButton: {
        marginTop: 10,
        width: "100%",
    },
    separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 30,
        width: "100%",
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#E5E5EA",
    },
    separatorText: {
        marginHorizontal: 10,
        color: "#8E8E93",
        fontSize: 14,
    },
    appleButton: {
        width: "100%",
        height: 50,
        marginBottom: 40,
    },
    createAccountButton: {
        marginBottom: 20,
    },
    createAccountText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "400",
    },
    footer: {
        alignItems: "center",
        marginTop: "auto",
        paddingBottom: 20,
    },
    footerText: {
        fontSize: 12,
        color: "#8E8E93",
        textAlign: "center",
        lineHeight: 18,
    },
    bold: {
        fontWeight: "600",
        color: "#000",
    },
});
