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

    productsListContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    productsTitle: {
        fontSize: 20,
        color: whiteColor,
        fontWeight: "bold",
    },

    productItemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    noProducts: {
        backgroundColor: pinkColor,
        color: whiteColor,
        minWidth: "50%",
        textAlign: "center",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },

    productItem: {
        backgroundColor: secondaryBlue,
        color: whiteColor,
        textAlign: "center",
        minWidth: "50%",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
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

    trashIcon: {
        color: pinkColor,
    },
});
