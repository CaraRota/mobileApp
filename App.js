import { View, StyleSheet, StatusBar } from "react-native";
import Homepage from "./src/components/Homepage";

import { colors } from "./src/styles/globals.js";

export default function App() {
    return (
        <View style={styles.container}>
            <Homepage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        alignItems: "center",
    },
});
