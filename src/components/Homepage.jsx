import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../css/Styles.js";
import SearchBar from "./ui/SearchBar";
import ProductsList from "./ProductsList.jsx";

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
