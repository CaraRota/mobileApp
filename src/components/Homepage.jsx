import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./ui/searchbar/SearchBar.jsx";
import ProductsList from "./ProductsList.jsx";

import { colors } from "../styles/globals.js";

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    };

    return (
        <>
            <View>
                <Text style={styles.appTitle}>Agrega un producto</Text>
            </View>
            <SearchBar products={products} setProducts={setProducts} />
            <ProductsList
                products={products}
                setProducts={setProducts}
                handleModal={handleModal}
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
            />
            <Text style={styles.textColor}>Hola, Coder!</Text>
            <Text style={styles.textColor}>Esto es una app hecha en React Native</Text>
        </>
    );
};

export default Homepage;

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 24,
        color: colors.whiteColor,
        fontWeight: "bold",
        marginTop: 20,
    },

    textColor: {
        color: colors.whiteColor,
    },
});
