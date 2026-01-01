import { type JSX, useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as AppleAuthentication from "expo-apple-authentication";
import { AccountStackParamList } from "../../types/navigation";
import { styles } from "../../styles";
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
        } catch (e) {
            Alert.alert(
                "Erreur de la connexion",
                "Une erreur est survenue lors de la connexion avec Apple.",
                [
                    { text: "Ok", style: "cancel" },
                    { text: "Réessayer", onPress: handleAppleSignIn }
                ]
            );
            if ((e as { code: string }).code === "ERR_REQUEST_CANCELED") {
                // l'utilisateur a fermé la popup de connexion
            } else {
                console.error(e);
            }
        }
    };

    return (
        <SafeAreaView style={styles.whiteContainer}>
            <KeyboardAvoidingView>
                <View style={styles.loginHeaderContainer}>
                    <Text style={styles.appTitle}>SmartKiosk</Text>
                </View>

                <View style={styles.loginFormContainer}>
                    <Text style={styles.sectionTitle}>
                        Se connecter
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="mail@domaine.be"
                        placeholderTextColor="#C7C7CC"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        placeholderTextColor="#C7C7CC"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={[
                            styles.button,
                            styles.continueButton,
                        ]}
                        onPress={() => {
                            login();
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Continuer
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorText}>ou</Text>
                        <View style={styles.separatorLine} />
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
                            style={styles.appleButton}
                            onPress={handleAppleSignIn}
                        />
                    ) : null}

                    <TouchableOpacity
                        style={styles.createAccountButton}
                    >
                        <Text style={styles.createAccountText}>
                            Créer un compte
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginFooter}>
                    <Text style={styles.loginFooterText}>
                        En cliquant sur continuer, vous acceptez nos
                        <Text style={styles.bold}> CGU</Text> et
                        <Text style={styles.bold}> Politique de confidentialité
                        </Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
