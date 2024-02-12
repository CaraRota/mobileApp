import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { colors } from "../../styles/globals";

const CategoryItem = ({ item, categoryPressed, setCategoryPressed }) => {
    const handleClick = (item) => {
        setCategoryPressed(item);
    };

    return (
        <Pressable onPress={() => handleClick(item)}>
            <View style={styles.container}>
                <Text style={styles.categoriesText}>{item.toUpperCase()}</Text>
            </View>
        </Pressable>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    categoriesText: {
        fontFamily: "OswaldRegular",
    },

    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.whiteColor,
        backgroundColor: colors.secondaryBlue,
        marginRight: 10,
        alignItems: "center",
    },
});
