import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "../styles/globals";

const Mainpage = ({ navigation }) => {
    const siteTitle = "eCommerce App";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{siteTitle}</Text>
            <View>
                <Text>Aca iria mi homepage lol</Text>
            </View>
        </View>
    );
};

export default Mainpage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
        marginHorizontal: "2.5%",
    },
    title: {
        fontFamily: "OswaldRegular",
        fontSize: 20,
        color: colors.pinkColor,
        textAlign: "center",
        marginTop: 10,
    },
});
