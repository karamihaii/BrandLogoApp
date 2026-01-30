import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/utils/supabase";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import defaultStyles from "../../styles/defaultStyles";
export default function FamilyScreen() {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [skiOrBoard, setSkiOrBoard] = useState("");
  const { session } = useAuth();


useEffect(() => {
  async function loadProfile() {
    if (!session?.user) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("first_name, last_name, ski_or_board")
      .eq("id", session.user.id)
      .single();

    if (!error && data) {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setSkiOrBoard(data.ski_or_board);
    }
  }

  loadProfile();
}, [session]);

const onRefresh = useCallback(async () => {
    setRefreshing(true);
    if (!session?.user) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("first_name, last_name, ski_or_board")
      .eq("id", session.user.id)
      .single();

    if (!error && data) {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setSkiOrBoard(data.ski_or_board);
    }
    setRefreshing(false);
  }, [session]);
  return (
    <ScrollView
      contentContainerStyle={defaultStyles.pageContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={defaultStyles.bodyText}>
        Customize your coolest {skiOrBoard}
      </Text>
    </ScrollView>
  );
}


function loadProfile() {
  throw new Error("Function not implemented.");
}

