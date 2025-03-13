import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerLayout from "@/app/drawer/_layout";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Drawer" component={DrawerLayout} />
    </Stack.Navigator>
  );
}
