import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashscreen}>
      <Image
        style={styles.splashscreenChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashscreenChild: {
    width: 202,
    height: 200,
  },
  splashscreen: {
    backgroundColor: Color.m3White,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: 79,
    paddingVertical: 220,
  },
});

export default SplashScreen;
