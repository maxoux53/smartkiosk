import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 27.5,
        fontWeight: "bold",
        marginTop: 30,
        textAlign: "center"
    },
    description: {
        fontSize: 18,
        color: "#666",
        textAlign: "left",
        marginTop: 20,
        marginBottom: 40
    },
    button: {
        backgroundColor: "#1C1C1E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 14,
        gap: 10,
        width: "100%"
    },
    buttonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "600"
    },
});
