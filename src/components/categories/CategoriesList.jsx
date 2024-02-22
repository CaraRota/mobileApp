import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoriesList = ({ categories, navigation }) => {
    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => {
                navigation.navigate("ProductsByCategory", {
                    category: item,
                });
            }}
            style={styles.container}>
            <Text style={styles.text}>{item}</Text>
        </Pressable>
    );

    return (
        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContainer}
        />
    );
};

export default CategoriesList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
    },
    flatListContainer: {
        paddingBottom: 20, // Adjust the padding bottom as needed
    },
});
