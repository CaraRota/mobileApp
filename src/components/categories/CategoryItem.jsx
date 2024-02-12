import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { colors } from "../../styles/globals";

const CategoryItem = ({ item, categoryPressed, setCategoryPressed }) => {
    const handleClick = (item) => {
        setCategoryPressed(item);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => handleClick(item)}>
                <Text>{item}</Text>
            </Pressable>
        </View>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
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
