import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { styles } from "../../css/Styles.js";

const SearchBar = ({ setProducts, products }) => {
    const [addProduct, setAddProduct] = useState("");

    const handleTextInput = (text) => {
        setAddProduct(text);
    };

    const handleAddItem = () => {
        setProducts([...products, addProduct]);
        setAddProduct("");
    };

    return (
        <>
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Qué producto deseas agregar?'
                    onChangeText={handleTextInput}
                    value={addProduct}></TextInput>
                <Pressable>
                    <Text style={styles.plusButton} onPress={handleAddItem}>
                        +
                    </Text>
                </Pressable>
            </View>
        </>
    );
};

export default SearchBar;
