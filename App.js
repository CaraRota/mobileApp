import { View } from "react-native";
import Homepage from "./src/components/Homepage";
import { styles } from "./src/css/Styles.js";

export default function App() {
    return (
        <View style={styles.container}>
            <Homepage />
        </View>
    );
}
