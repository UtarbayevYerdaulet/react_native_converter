import React, { useEffect, useState, useRef, useContext } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
} from "react-native";

import AppContext from "./AppContext";

const { width, height } = Dimensions.get("window");

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default function ConvertScreenHeader() {
  const $ = useContext(AppContext);

  useEffect(() => {}, []);

  return (
    <View>      
      <View style={{marginVertical: 10}}>
        <Text style={{marginBottom: 20, color: "white", fontSize: 40, fontWeight: 700}}>Главная</Text>
        <Text style={{color: "white", fontSize: 20, fontWeight: 500}}>Курсы валют</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: "10%",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  main: {
    backgroundColor: "black",
    height: "90%",
  },
});