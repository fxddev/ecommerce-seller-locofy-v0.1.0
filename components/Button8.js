import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Button8 = ({ style }) => {
  return (
    <View style={[styles.button, style, styles.buttonFlexBox]}>
      <View style={[styles.stateLayer, styles.buttonFlexBox]}>
        <Text style={styles.labelText}>Password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.size_2xs,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
  },
  stateLayer: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_2xs,
  },
  button: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    height: 28,
    overflow: "hidden",
  },
});

export default Button8;
