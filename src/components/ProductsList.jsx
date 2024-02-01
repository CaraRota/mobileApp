import React from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { styles } from "../css/Styles.js";

import TrashIcon from "../components/ui/RemoveIcon";

const uniqueKey = () => Date.now() * Math.random();

const ProductsList = ({ products, handleRemoveItem }) => {
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
                                <Pressable onPress={() => handleRemoveItem(item)}>
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
        </View>
    );
};

export default ProductsList;
