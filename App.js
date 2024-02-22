// App.js
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/styles/globals.js";
import { fonts } from "./src/global/fonts.js";
import { useFonts } from "expo-font";
import Navigator from "./src/navigation/Navigator.jsx";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                animated={true}
                backgroundColor={colors.backgroundColor}
            />
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
    },
});
