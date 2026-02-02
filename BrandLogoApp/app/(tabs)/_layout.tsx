import Auth from "@/components/Auth";
import { useAuth } from "@/components/AuthProvider";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import AppHeader from "../../components/AppHeader";
import colors from "../../styles/colors";

export default function TabsLayout() {

  const { session } = useAuth();


    // If session becomes null while inside tabs, render Auth in-place (no navigation)
    // If session is null while inside the tabs navigator, render the Auth
    // form in-place instead of attempting to force a navigation back to `/`.
    // This keeps the app state intact and avoids brittle cross-navigator calls.
    if (session === null) {
      return (
        <View style={{ flex: 1 }}>
          <AppHeader />
          <Auth />
        </View>
      );
    }


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
          name="quiz"
          options={{
            headerTitle: "Edit Profile",
            tabBarIcon: ({ focused, color }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
