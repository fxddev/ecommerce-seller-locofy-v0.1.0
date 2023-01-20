import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const BottomSheet = ({ onClose }) => {
  return (
    <View style={styles.bottomSheet}>
      <View style={styles.buttonParent}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <View style={[styles.stateLayer, styles.buttonFlexBox]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon16.png")}
            />
            <Text style={[styles.labelText, styles.ml8]}>Lihat Product</Text>
          </View>
        </View>
        <View style={[styles.button, styles.mt15, styles.buttonFlexBox]}>
          <View style={[styles.stateLayer, styles.buttonFlexBox]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon16.png")}
            />
            <Text style={[styles.labelText, styles.ml8]}>Lihat Product</Text>
          </View>
        </View>
        <View style={[styles.button, styles.mt15, styles.buttonFlexBox]}>
          <View style={[styles.stateLayer, styles.buttonFlexBox]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon16.png")}
            />
            <Text style={[styles.labelText, styles.ml8]}>Lihat Product</Text>
          </View>
        </View>
      </View>
      <View style={styles.sheetHeader}>
        <View style={styles.dragHandle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: 18,
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
  },
  stateLayer: {
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
  },
  button: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  buttonParent: {
    top: 32,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_4xs,
    left: 0,
    position: "absolute",
    width: 400,
  },
  dragHandle: {
    backgroundColor: Color.m3SysLightOutline,
    width: 32,
    height: 4,
    opacity: 0.4,
    borderRadius: Border.br_xl,
  },
  sheetHeader: {
    top: 0,
    right: 0,
    height: 36,
    padding: Padding.p_lg,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  bottomSheet: {
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    height: 211,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 400,
  },
});

export default BottomSheet;
