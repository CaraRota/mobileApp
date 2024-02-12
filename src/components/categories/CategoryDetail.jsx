import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { colors } from "../../styles/globals";
import GoBack from "../ui/GoBack";

const CategoryDetail = ({ categoryPressed, setCategoryPressed, products }) => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const filteredProducts = products.filter(
                    (item) => item.category === categoryPressed
                );
                setCategoryProducts(filteredProducts);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleGoBack = () => {
        setCategoryPressed(false);
    };

    return (
        <>
            <Pressable onPress={handleGoBack}>
                <GoBack />
            </Pressable>
            <View style={styles.categoryDetailContainer}>
                <Text style={styles.text}>Estas viendo: {categoryPressed}</Text>
                {loading ? (
                    <Text>Cargando {categoryPressed}</Text>
                ) : (
                    <>
                        <FlatList
                            data={categoryProducts}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <View style={styles.flatListContainer}>
                                    <Text style={styles.text}>{item.title}</Text>
                                    <Image
                                        source={{ uri: item.images[0] }}
                                        style={styles.productImage}
                                    />
                                    <Text style={styles.text}>${item.price}</Text>
                                </View>
                            )}
                        />
                    </>
                )}
            </View>
        </>
    );
};

export default CategoryDetail;

const styles = StyleSheet.create({
    categoryDetailContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    flatListContainer: {
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 200,
        backgroundColor: colors.pinkColor,
        borderRadius: 10,
    },
    text: {
        color: colors.whiteColor,
        height: 50,
        maxWidth: 100,
        textAlign: "center",
        marginTop: 5,
    },

    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});
