import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ products, categoryPressed, setCategoryPressed }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = [];
        products.forEach((product) => {
            if (!getCategories.includes(product.category)) {
                getCategories.push(product.category);
            }
        });
        setCategories(getCategories);
    }, [products]);

    return (
        <View style={styles.flatListContainer}>
            {categories.length < 1 ? (
                <Text>Loading Categories...</Text>
            ) : (
                <FlatList
                    data={categories}
                    // horizontal={true}
                    keyExtractor={(item) => item.length}
                    renderItem={({ item }) => (
                        <CategoryItem
                            item={item}
                            categoryPressed={categoryPressed}
                            setCategoryPressed={setCategoryPressed}
                        />
                    )}
                />
            )}
        </View>
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    flatListContainer: {
        flexDirection: "row",
        padding: 10,
        gap: 10,
    },
});
