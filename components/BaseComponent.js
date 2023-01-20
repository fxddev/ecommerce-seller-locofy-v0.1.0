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

const BaseComponent = ({ style }) => {
  return (
    <View style={[styles.baseComponent, style]}>
      <Image
        style={styles.inactiveicon}
        resizeMode="cover"
        source={require("../assets/inactiveicon6.png")}
      />
      <Text style={[styles.labelText, styles.mt8]}>Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_2xs,
  },
  inactiveicon: {
    width: 24,
    height: 24,
  },
  labelText: {
    fontSize: FontSize.size_2xs,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.gray_500,
    textAlign: "center",
    width: 103,
  },
  baseComponent: {
    height: 80,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    justifyContent: "center",
    width: 103,
  },
});

export default BaseComponent;
