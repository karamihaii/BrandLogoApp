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
  const [skiCount, setSkiCount] = useState(0);
    const [snowboardCount, setSnowboardCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    


useEffect(() => {
  //used chatGPT to understand how to and make function that loads in the stats for teh whole data set
  async function loadStats() {
  const { data, error } = await supabase
    .from("profiles")
    .select("ski_or_board");

  if (error || !data) return;

  const total = data.length;

  const ski = data.filter(
    (user) => user.ski_or_board === "Ski"
  ).length;

  const snowboard = data.filter(
    (user) => user.ski_or_board === "Snowboard"
  ).length;

  setSkiCount(ski);
  setSnowboardCount(snowboard);
  setTotalCount(total);
}

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
  loadStats();
}, [session]);
//used ChatGpt to implement a scroll to refresh on my customize screen https://chatgpt.com/share/6980e8ef-be44-800f-8526-beb5088c9d20 
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
  const skiPercent =
  totalCount ? Math.round((skiCount / totalCount) * 100) : 0;

const snowboardPercent =
  totalCount ? Math.round((snowboardCount / totalCount) * 100) : 0;

  return (
    <ScrollView
      contentContainerStyle={defaultStyles.pageContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={defaultStyles.bodyText}>
        Customize your coolest {skiOrBoard}s
      </Text>
      <Text style={defaultStyles.tinyText}>{skiPercent}% of usesrs ski and {snowboardPercent}% of usesrs snowboard </Text>
    </ScrollView>
  );
}


function loadProfile() {
  throw new Error("Function not implemented.");
}

