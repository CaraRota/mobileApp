import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { styles } from "../../css/Styles.js";
import ProductsList from "../ProductsList";

const SearchBar = () => {
    const [addProduct, setAddProduct] = useState("");
    const [products, setProducts] = useState([]);

    const handleTextInput = (text) => {
        setAddProduct(text);
    };

    const handleAddItem = () => {
        setProducts([...products, addProduct]);
        setAddProduct("");
    };

    const handleRemoveItem = (item) => {
        const filteredProduxcts = products.filter((product) => product !== item);
        setProducts(filteredProduxcts);
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
            <ProductsList products={products} handleRemoveItem={handleRemoveItem} />
        </>
    );
};

export default SearchBar;
