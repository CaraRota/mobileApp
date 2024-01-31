import { StyleSheet, StatusBar } from "react-native";

const backgroundColor = "#212D40";
const whiteColor = "#F9F9F9";
const secondaryBlue = "#6883BA";
const pinkColor = "#E072A4";
const greenColor = "#B0E298";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        alignItems: "center",
    },

    appTitle: {
        fontSize: 24,
        color: whiteColor,
        fontWeight: "bold",
        marginTop: 20,
    },

    textColor: {
        color: whiteColor,
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
        backgroundColor: whiteColor,
        padding: 10,
    },
});
