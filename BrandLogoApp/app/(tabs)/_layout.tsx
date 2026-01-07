import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.darkGrey,
        tabBarInactiveTintColor: colors.mediumGrey,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerShadowVisible: false,
        headerTintColor: colors.darkBackground,
        tabBarStyle: {
          backgroundColor: colors.lightBackground,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="customize"
        options={{
          headerTitle: "Customize",
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="create" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          headerTitle: "Browse",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
