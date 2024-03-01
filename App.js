// App.js
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/styles/globals.js";
import { fonts } from "./src/global/fonts.js";
import { useFonts } from "expo-font";
import Navigator from "./src/navigation/Navigator.jsx";
import { store } from "./src/store/";
import { Provider } from "react-redux";

export default function App() {
    const [fontsLoaded] = useFonts(fonts);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    animated={true}
                    backgroundColor={colors.backgroundColor}
                />
                <Navigator />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
    },
});
