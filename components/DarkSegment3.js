import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const DarkSegment3 = ({ style }) => {
  return (
    <View style={[styles.darkSegment, style]}>
      <View style={styles.baseComponent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon2.png")}
        />
        <Text style={[styles.labelText, styles.mt4]}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_3xs,
  },
  icon: {
    width: 64,
    height: 32,
  },
  labelText: {
    fontSize: FontSize.size_2xs,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.gray_200,
    textAlign: "center",
    width: 103,
  },
  baseComponent: {
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_lg,
    justifyContent: "center",
    alignItems: "center",
  },
  darkSegment: {
    width: 164,
    height: 80,
    alignItems: "center",
  },
});

export default DarkSegment3;
