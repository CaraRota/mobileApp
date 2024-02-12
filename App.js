import { View, StyleSheet, StatusBar } from "react-native";
import Homepage from "./src/components/Homepage";

import { colors } from "./src/styles/globals.js";
import { fonts } from "./src/global/fonts.js";
import { useFonts } from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.appWrapper}>
                <Homepage />
            </View>
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
    appWrapper: {
        width: "95%",
    },
});
