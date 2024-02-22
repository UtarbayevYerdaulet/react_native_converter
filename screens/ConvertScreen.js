import React, { useEffect, useState, useRef, useContext } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import AppContext from "../components/AppContext";

const { width, height } = Dimensions.get("window");

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

import ConvertScreenMain from "./ConvertScreenMain";

export default function ConvertScreen() {
  const $ = useContext(AppContext);

  useEffect(() => {}, []);

  return (
    <View>
      {/* <ConvertScreenHeader/> */}
      <ConvertScreenMain/>
    </View>
  );
}

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
