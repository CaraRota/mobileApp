import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccc",
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
    },

    searchBarContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        width: "100%",
    },

    plusButton: {
        backgroundColor: "#eee",
        color: "black",
        width: 40,
        height: 40,
        textAlign: "center",
        lineHeight: 40,
        borderRadius: 10,
    },

    input: {
        height: 40,
        margin: 12,
        width: "85%",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#f9f9f9",
        padding: 10,
    },
});
