import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../views/Categories";

import { colors } from "../styles/globals";

const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categorias'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.secondaryBlue,
                },
                headerTintColor: colors.backgroundColor,
            }}>
            <Stack.Screen name='Categorias' component={Categories} />
        </Stack.Navigator>
    );
};

export default CategoriesStack;

const styles = StyleSheet.create({});
