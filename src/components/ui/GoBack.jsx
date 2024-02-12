import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { colors } from "../../styles/globals";

const GoBack = () => {
    return (
        <View style={styles.goBackContainer}>
            <Text style={styles.text}>⬅</Text>
            <Text style={styles.volver}>Volver</Text>
        </View>
    );
};

export default GoBack;

const styles = StyleSheet.create({
    goBackContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 10,
        borderColor: colors.whiteColor,
        borderWidth: 1,
        maxWidth: 100,
        borderRadius: 10,
        marginBottom: 15,
    },
    volver: {
        color: colors.whiteColor,
    },
    text: {
        color: colors.whiteColor,
        backgroundColor: colors.pinkColor,
        textAlign: "center",
        borderRadius: 30,
        width: 30,
        height: 30,
        fontSize: 20,
    },
});
