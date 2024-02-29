import React from "react";
import { StyleSheet } from "react-native";
import HomepageStack from "./HomepageStack";
import CategoriesStack from "./CategoriesStack";
import ProductsStack from "./ProductsStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Homepage'
                screenOptions={{
                    headerShown: false,
                }}>
                <Tab.Screen
                    name='Inicio'
                    component={HomepageStack}
                    options={{
                        tabBarIcon: ({ color }) => <Icons name='home' color={color} size={26} />,
                    }}
                />
                <Tab.Screen
                    name='Categorias'
                    component={CategoriesStack}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icons name='format-list-bulleted' color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;

const styles = StyleSheet.create({});
