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

const BaseComponent1 = ({ style }) => {
  return (
    <View style={[styles.baseComponent, style]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon1.png")}
      />
      <Text style={[styles.labelText, styles.mt4]}>Products</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BaseComponent1;
