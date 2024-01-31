import React, { useState } from "react";
import { View, TextInput, Text, Pressable, FlatList } from "react-native";
import { styles } from "../../css/Styles.js";
import ProductsList from "../ProductsList";

const SearchBar = () => {
    const [inputText, setInputText] = useState("");
    const [products, setProducts] = useState([]);

    const handleTextInput = (text) => {
        setInputText(text);
        console.log(inputText);
    };

    const handleAddItem = () => {
        setProducts([...products, { id: products.length, name: "Producto" }]);
    };
    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.input}
                placeholder='Qué estás buscando?'
                onChangeText={handleTextInput}></TextInput>
            <Pressable>
                <Text style={styles.plusButton} onPress={handleAddItem}>
                    +
                </Text>
            </Pressable>
            <FlatList>
                <ProductsList />
            </FlatList>
        </View>
    );
};

export default SearchBar;
