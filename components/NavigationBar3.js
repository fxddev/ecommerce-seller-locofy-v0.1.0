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

const NavigationBar3 = ({ style }) => {
  return (
    <View style={[styles.navigationBar, style]}>
      <View style={styles.darkFlexBox} />
      <View style={[styles.darkSegment1, styles.darkFlexBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt4: {
    marginTop: Margin.m_3xs,
  },
  baseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_2xs,
    width: 103,
  },
  darkFlexBox: {
    alignItems: "center",
    width: 164,
  },
  darkSegment1: {
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

export default NavigationBar3;
