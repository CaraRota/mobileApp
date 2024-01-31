import { View, Text } from "react-native";
import { styles } from "../css/Styles.js";
import SearchBar from "./ui/SearchBar";

const Homepage = () => {
    return (
        <>
            <View>
                <Text style={styles.appTitle}>Agrega un producto</Text>
            </View>
            <SearchBar />
            <Text style={styles.textColor}>Hola, Coder!</Text>
            <Text style={styles.textColor}>Esto es una app hecha en React Native</Text>
        </>
    );
};

export default Homepage;
