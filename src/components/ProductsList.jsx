import React, { useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import ModalComponent from "./ui/searchbar/ModalComponent.jsx";
import TrashIcon from "./ui/icons/RemoveIcon.jsx";

import { colors } from "../styles/globals.js";

const ProductsList = ({ products, setProducts, handleModal, setVisibleModal, visibleModal }) => {
    const [selectedItem, setSelectedItem] = useState("");

    const uniqueKey = () => Date.now() * Math.random();

    const handleRemoveItem = (item) => {
        const filteredProducts = products.filter((product) => product !== item);
        setProducts(filteredProducts);
        setVisibleModal(false);
    };

    return (
        <View style={styles.productsListContainer}>
            <Text style={styles.productsTitle}>Lista de productos</Text>
            {products.length > 0 ? (
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <>
                            <View style={styles.productItemContainer}>
                                <Text style={styles.productItem}>{item}</Text>
                                <Pressable
                                    onPress={() => {
                                        setVisibleModal(true);
                                        setSelectedItem(item);
                                    }}>
                                    <TrashIcon style={styles.trashIcon} />
                                </Pressable>
                            </View>
                        </>
                    )}
                    keyExtractor={() => uniqueKey()} //Temporary solution for unique keys
                />
            ) : (
                <Text style={styles.noProducts}>No hay productos en tu lista</Text>
            )}
            {visibleModal && (
                <ModalComponent
                    visibleModal={visibleModal}
                    handleRemoveItem={handleRemoveItem}
                    handleModal={handleModal}
                    selectedItem={selectedItem}
                />
            )}
        </View>
    );
};

export default ProductsList;

const styles = StyleSheet.create({
    productsListContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    productsTitle: {
        fontSize: 20,
        color: colors.whiteColor,
        fontWeight: "bold",
    },
    productItemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    noProducts: {
        backgroundColor: colors.pinkColor,
        color: colors.whiteColor,
        minWidth: "50%",
        textAlign: "center",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },

    productItem: {
        backgroundColor: colors.secondaryBlue,
        color: colors.whiteColor,
        textAlign: "center",
        minWidth: "50%",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    trashIcon: {
        color: colors.pinkColor,
    },
});
