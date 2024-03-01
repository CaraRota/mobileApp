import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../views/Homepage";

import { colors } from "../styles/globals";

const Stack = createNativeStackNavigator();

const HomepageStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Homepage'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.secondaryBlue,
                },
                headerTintColor: colors.backgroundColor,
            }}>
            <Stack.Screen name='Homepage' component={Homepage} />
        </Stack.Navigator>
    );
};

export default HomepageStack;

const styles = StyleSheet.create({});
