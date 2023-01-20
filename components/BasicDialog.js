import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const BasicDialog = ({ onClose }) => {
  return (
    <View style={[styles.basicDialog, styles.actionsFlexBox]}>
      <View style={styles.textContent}>
        <View style={styles.titleDescription}>
          <Text style={[styles.title, styles.bodyFlexBox]}>
            Basic dialog title
          </Text>
          <Text
            style={[
              styles.body,
              styles.mt16,
              styles.bodyTypo,
              styles.bodyFlexBox,
            ]}
          >
            A dialog is a type of modal window that appears in front of app
            content to provide critical information, or prompt for a decision to
            be made.
          </Text>
        </View>
      </View>
      <View style={[styles.actions, styles.actionsFlexBox]}>
        <View style={[styles.actions1, styles.buttonFlexBox]}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.labelText, styles.bodyTypo]}>Action 2</Text>
          </View>
          <View style={[styles.button, styles.ml8, styles.buttonFlexBox]}>
            <Text style={[styles.labelText, styles.bodyTypo]}>Action 1</Text>
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
  bodyFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  bodyTypo: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  buttonFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.m3HeadlineSmall1_size,
    lineHeight: 32,
    color: Color.m3ReadOnlyDarkSurface21,
    fontFamily: FontFamily.m3HeadlineSmall1,
    textAlign: "left",
  },
  body: {
    color: Color.m3SysLightOnSurfaceVariant,
  },
  titleDescription: {
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_3xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textContent: {
    alignSelf: "stretch",
  },
  labelText: {
    fontWeight: "500",
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
  },
  actions1: {
    flexDirection: "row",
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_3xl,
    paddingTop: Padding.p_3xl,
  },
  actions: {
    alignSelf: "stretch",
  },
  basicDialog: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    width: 312,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default BasicDialog;
