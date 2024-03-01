import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesList from "./CategoriesList.jsx";

import { productsUrl } from "../../config/jsonUrl.js";
import axios from "axios";

import { setCategories } from "../../features/shopSlice.js";
import { useDispatch, useSelector } from "react-redux";

const CategoriesItem = ({ siteTitle }) => {
    const categories = useSelector((state) => state.shopReducer.categories);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

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
                dispatch(setCategories(getCategories));
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
            <CategoriesList categories={categories} />
        </View>
    );
};

export default CategoriesItem;

const styles = StyleSheet.create({});
