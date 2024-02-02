import React, { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";

import { colors } from "../../../styles/globals.js";

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

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        width: "100%",
    },

    plusButton: {
        backgroundColor: "#eee",
        color: "black",
        width: 40,
        height: 40,
        textAlign: "center",
        lineHeight: 40,
        borderRadius: 10,
    },

    input: {
        height: 40,
        margin: 12,
        width: "85%",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: colors.whiteColor,
        padding: 10,
    },
});
