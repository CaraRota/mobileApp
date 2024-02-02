import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { styles } from "../../css/Styles.js";
import ProductsList from "../ProductsList";
import ModalComponent from "./ModalComponent";

const SearchBar = () => {
    const [addProduct, setAddProduct] = useState("");
    const [products, setProducts] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);

    const handleTextInput = (text) => {
        setAddProduct(text);
    };

    const handleAddItem = () => {
        setProducts([...products, addProduct]);
        setAddProduct("");
    };

    const handleRemoveItem = (item) => {
        const filteredProducts = products.filter((product) => product !== item);
        setProducts(filteredProducts);
        setVisibleModal(false);
    };

    const handleModal = () => {
        setVisibleModal(!visibleModal);
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
            <ProductsList products={products} handleModal={handleModal} />
            {visibleModal ? (
                <ModalComponent
                    visibleModal={visibleModal}
                    handleRemoveItem={handleRemoveItem}
                    handleModal={handleModal}
                />
            ) : null}
        </>
    );
};

export default SearchBar;
