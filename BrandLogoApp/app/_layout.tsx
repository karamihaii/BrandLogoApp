import { AuthProvider } from "@/components/AuthProvider";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";


export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style ="light"/>
      <Slot />
    </AuthProvider>
  );
}
