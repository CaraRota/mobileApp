import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesList from "./CategoriesList.jsx";

import { productsUrl } from "../../config/jsonUrl.js";
import axios from "axios";

const CategoriesItem = ({ siteTitle, navigation }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = [];
        const fetchData = async () => {
            try {
                const response = await axios.get(productsUrl);
                const data = response.data.products;
                data.forEach((product) => {
                    if (!getCategories.includes(product.category)) {
                        getCategories.push(product.category);
                    }
                });
                setCategories(getCategories);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return loading ? (
        <Text>Cargando...</Text>
    ) : (
        <View style={styles.container}>
            <Text style={styles.title}>{siteTitle}</Text>
            <CategoriesList categories={categories} navigation={navigation} />
        </View>
    );
};

export default CategoriesItem;

const styles = StyleSheet.create({});
