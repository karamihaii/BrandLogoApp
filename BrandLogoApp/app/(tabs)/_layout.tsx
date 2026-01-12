import { Tabs } from "expo-router";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import React from "react";
import { View } from "react-native";
import AppHeader from "../components/AppHeader";

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
        <AppHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
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
          name="index"
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
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
