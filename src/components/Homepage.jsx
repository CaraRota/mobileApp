import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "./ui/searchbar/SearchBar.jsx";
import CategoryList from "./categories/CategoryList.jsx";
import CategoryDetail from "./categories/CategoryDetail.jsx";

import { colors } from "../styles/globals.js";

import axios from "axios";

import { productsUrl } from "../config/jsonUrl.js";

const Homepage = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);

    const [categoryPressed, setCategoryPressed] = useState(false);

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(productsUrl);
                setProducts(response.data.products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [products]);

    return (
        <>
            <Text style={styles.appTitle}>eCommerce Shop</Text>
            {/* <SearchBar products={products} setProducts={setProducts} /> */}
            {loading ? (
                <Text style={styles.textColor}>Loading...</Text>
            ) : (
                <>
                    {categoryPressed ? (
                        <CategoryDetail
                            categoryPressed={categoryPressed}
                            setCategoryPressed={setCategoryPressed}
                            products={products}
                        />
                    ) : (
                        <CategoryList
                            products={products}
                            categoryPressed={categoryPressed}
                            setCategoryPressed={setCategoryPressed}
                        />
                    )}
                </>
            )}

            {/* <ProductsList
                products={products}
                setProducts={setProducts}
                handleModal={handleModal}
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
            /> */}
        </>
    );
};

export default Homepage;

const styles = StyleSheet.create({
    appTitle: {
        fontFamily: "HonkRegular",
        fontSize: 24,
        color: colors.whiteColor,
        marginTop: 20,
        marginBottom: 20,
    },
    textColor: {
        color: colors.whiteColor,
    },
});
