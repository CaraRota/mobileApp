import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.secondaryBlue,
                },
                headerTintColor: colors.backgroundColor,
            }}>
            <Stack.Screen name='Products' component={Products} />
        </Stack.Navigator>
    );
};

export default ProductsStack;

const styles = StyleSheet.create({});
