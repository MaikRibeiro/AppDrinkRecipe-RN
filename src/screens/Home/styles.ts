import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerEmptyList: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textEmptyComponent: {
        color: "#AAB",
        fontSize: 18,
        fontWeight: "bold",
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "black",
        paddingVertical: 12,
    },
    textInput: {
        borderWidth: 0.5,
        padding: 8,
        borderRadius: 8,
        borderColor: "gray",
        flex: 1,
        height: 45,
        color: "#FFF",
    },
    iconSearchBtn: {
        width: 35,
        marginLeft: 15,
    },
    iconSearch: {
        color: "#FFF",
    },
    iconClearBtn: {
        position: "absolute",
        right: 75,
        color: "red",
    },
    iconClose: {
        color: "red",
    },
    errorMessage: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        paddingTop: 12,
    },
    drinkItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 10,
        margin: 4,
        gap: 4,
        borderBottomWidth: 2,
        borderColor: "#DDD",
    },
    drinkThumb: {
        width: 60,
        height: 60,
        borderRadius: 4,
    },
});