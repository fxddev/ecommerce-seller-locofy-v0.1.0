import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Margin,
  Padding,
  FontSize,
  FontFamily,
  Border,
  Color,
} from "../GlobalStyles";

const Drawer1 = () => {
  return <View style={styles.drawer} />;
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_3xs,
  },
  ml12: {
    marginLeft: Margin.m_sm,
  },
  textFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dividerSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  labelTypo: {
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    letterSpacing: 0,
  },
  navItemSpaceBlock: {
    paddingBottom: Padding.p_lg,
    paddingRight: Padding.p_3xl,
    paddingTop: Padding.p_lg,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: Padding.p_lg,
    height: 56,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  drawer: {
    backgroundColor: Color.m3White,
    width: "100%",
    height: 788,
    overflow: "hidden",
    flex: 1,
  },
});

export default Drawer1;
