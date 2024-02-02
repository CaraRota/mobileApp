import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../css/Styles.js";

import ModalComponent from "./ui/ModalComponent";

import TrashIcon from "../components/ui/RemoveIcon";

const uniqueKey = () => Date.now() * Math.random();

const ProductsList = ({ products, setProducts, handleModal, setVisibleModal, visibleModal }) => {
    const [selectedItem, setSelectedItem] = useState("");

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
