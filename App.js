import { View } from "react-native";
import Homepage from "./components/Homepage";
import { styles } from "./css/Styles";

export default function App() {
    return (
        <View style={styles.container}>
            <Homepage />
        </View>
    );
}
