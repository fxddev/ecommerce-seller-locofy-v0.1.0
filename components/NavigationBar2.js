import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Margin, FontFamily, FontSize, Color } from "../GlobalStyles";

const NavigationBar2 = ({ style }) => {
  return (
    <View style={[styles.navigationBar, style]}>
      <View style={[styles.darkSegment, styles.darkFlexBox2]} />
      <View style={styles.darkFlexBox2} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_3xs,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  darkFlexBox2: {
    alignItems: "center",
    width: 114,
  },
  baseFlexBox2: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo5: {
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_2xs,
    width: 103,
  },
  darkSegment: {
    height: 80,
  },
  navigationBar: {
    alignSelf: "stretch",
    backgroundColor: Color.m3ReadOnlyDarkSurface21,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default NavigationBar2;
