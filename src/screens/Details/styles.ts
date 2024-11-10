import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 16,
        backgroundColor: "#FFF",
    },
    drinkTitle: {
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold",
        color: "#888",
    },
    headerImage: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginVertical: 8,
    },
    category: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 4,
    },
    glass: {
        fontSize: 15,
        textAlign: "center",
        marginBottom: 8,
        fontWeight: "bold",
        color: "#878a87",
    },
    divisao: {
        borderWidth: 1,
        height: 1,
        borderColor: "#DDD",
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 4,
        fontWeight: "bold",
    },
    ingredientsItem: {
        fontSize: 14,
        marginBottom: 4,
    },
    instructionsContent: {
        fontSize: 14,
        marginBottom: 4,
    },
});