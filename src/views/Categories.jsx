import { StyleSheet } from "react-native";
import React from "react";
import CategoriesItem from "../components/categories/CategoriesItem";

const Categories = ({ navigation }) => {
    return <CategoriesItem navigation={navigation} />;
};

export default Categories;

const styles = StyleSheet.create({});
