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

const BasicDialogModalConfirmHapus = ({ onClose }) => {
  return (
    <View style={[styles.basicDialogModalconfirmhapus, styles.actionsFlexBox]}>
      <View style={[styles.titleDescription, styles.buttonFlexBox]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon9.png")}
        />
        <Text style={[styles.headline, styles.mt16]}>Hapus Product?</Text>
        <Text style={[styles.supportingText, styles.mt16, styles.textTypo]} />
      </View>
      <View style={[styles.actions, styles.actionsFlexBox]}>
        <View style={[styles.actions1, styles.actions1FlexBox]}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <View style={[styles.stateLayer, styles.actions1FlexBox]}>
              <Text style={[styles.labelText, styles.textTypo]}>Batal</Text>
            </View>
          </View>
          <View style={[styles.button, styles.ml8, styles.buttonFlexBox]}>
            <View style={[styles.stateLayer, styles.actions1FlexBox]}>
              <Text style={[styles.labelText, styles.textTypo]}>Hapus</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: Margin.m_lg,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  actionsFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  buttonFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  textTypo: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  actions1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  headline: {
    fontSize: FontSize.m3HeadlineSmall1_size,
    lineHeight: 32,
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignSelf: "stretch",
  },
  supportingText: {
    color: Color.m3SysLightOnSurfaceVariant,
    textAlign: "left",
    display: "none",
    alignSelf: "stretch",
  },
  titleDescription: {
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "center",
    paddingTop: Padding.p_3xl,
    alignSelf: "stretch",
  },
  labelText: {
    fontWeight: "500",
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
  },
  stateLayer: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
  },
  button: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
  },
  actions1: {
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_3xl,
    paddingTop: Padding.p_3xl,
    overflow: "hidden",
    flexDirection: "row",
  },
  actions: {
    alignSelf: "stretch",
  },
  basicDialogModalconfirmhapus: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    width: 312,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default BasicDialogModalConfirmHapus;
