import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import { productsUrl } from "../../config/jsonUrl.js";
import axios from "axios";
import ProductByCategoryList from "./ProductByCategoryList.jsx";

const ProductsByCategory = ({ route }) => {
    const { category } = route.params;

    const [loading, setLoading] = useState(true);
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(productsUrl);
                const data = response.data.products;

                // Filter products by category
                const filteredProducts = data.filter((product) => product.category === category);

                setProductsByCategory(filteredProducts);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]); // Add category as a dependency

    return loading ? (
        <Text>Cargando...</Text>
    ) : (
        <View>
            <FlatList
                data={productsByCategory}
                renderItem={({ item }) => <ProductByCategoryList product={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
