import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Button9 = ({ style }) => {
  return (
    <View style={[styles.button, style, styles.buttonFlexBox6]}>
      <View style={[styles.stateLayer, styles.buttonFlexBox6]}>
        <Text style={styles.labelText}>Password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox6: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.size_2xs,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3White,
    textAlign: "center",
  },
  stateLayer: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
  },
  button: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.m3SysLightPrimary1,
    height: 28,
    overflow: "hidden",
  },
});

export default Button9;