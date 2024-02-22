import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../views/Homepage";
import Categories from "../views/Categories";
import ProductsByCategory from "../components/categories/ProductsByCategory";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName='Homepage'>
            <Stack.Screen name='Homepage' component={Homepage} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='ProductsByCategory' component={ProductsByCategory} />
        </Stack.Navigator>
    );
};

export default Navigator;

const styles = StyleSheet.create({});
