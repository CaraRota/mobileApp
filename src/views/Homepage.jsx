import { StyleSheet, View } from "react-native";
import React from "react";
import Mainpage from "../components/Mainpage";

import { colors } from "../styles/globals";

const Homepage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Mainpage navigation={navigation} />
        </View>
    );
};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor, // Set background color here
    },
});
