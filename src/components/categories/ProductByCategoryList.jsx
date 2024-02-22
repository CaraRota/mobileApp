import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductByCategoryList = ({ product }) => {
    const { title, price, description, thumbnail } = product;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price} USD</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={{ uri: thumbnail }} style={styles.image} />
        </View>
    );
};

export default ProductByCategoryList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        width: "95%",
        marginHorizontal: "2.5%",
        marginTop: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00C853",
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        marginBottom: 8,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 8,
    },
});
