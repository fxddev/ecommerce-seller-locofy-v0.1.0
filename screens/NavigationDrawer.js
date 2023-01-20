import * as React from "react";
import { useState, useCallback } from "react";
import Button7 from "../components/Button3";
import SectionHeader2 from "../components/SectionHeader2";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import BasicDialogModalConfirmLogou from "../components/BasicDialogModalConfirmLogou";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
} from "../GlobalStyles";

const NavigationDrawer = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <Button7 style={styles.mt25} />,
    <SectionHeader2 style={styles.mt25} />,
  ]);
  const [drawerItemsActive] = useState([
    <Button7 style={styles.mt25} />,
    <SectionHeader2 style={styles.mt25} />,
  ]);
  const [button1Visible, setButton1Visible] = useState(false);
  const stateIndex = !state ? 0 : state.index - 1;

  const openButton1 = useCallback(() => {
    setButton1Visible(true);
  }, []);

  const closeButton1 = useCallback(() => {
    setButton1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.navigationDrawer}>
        <View style={styles.navigationDrawer1}>
          <View style={styles.headline}>
            <Text style={styles.title}>Profile</Text>
          </View>
          <View style={[styles.sectionHeader1, styles.sectionSpaceBlock]}>
            <View style={[styles.mycontainer, styles.mycontainerSpaceBlock]}>
              <View style={[styles.leadingElements, styles.buttonFlexBox]}>
                <Image
                  style={[styles.monogramIcon, styles.buttonLayout]}
                  resizeMode="cover"
                  source={require("../assets/monogram.png")}
                />
              </View>
              <Text style={[styles.headline1, styles.mt25, styles.labelTypo]}>
                Nama toko
              </Text>
              {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
              <View style={[styles.divider1, styles.mt25]}>
                <View style={[styles.divider, styles.buttonBorder]} />
              </View>
            </View>
          </View>
          {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
        </View>
      </View>

      <Modal animationType="fade" transparent visible={button1Visible}>
        <View style={styles.button1Overlay}>
          <Pressable style={styles.button1Bg} onPress={closeButton1} />
          <BasicDialogModalConfirmLogou onClose={closeButton1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt25: {
    marginTop: Margin.m_2xl,
  },
  button1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  button1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  sectionSpaceBlock: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_lg,
    borderRadius: Border.br_xl,
  },
  mycontainerSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
  },
  buttonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  buttonBorder: {
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  labelTypo1: {
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  title: {
    color: Color.m3SysLightOnSurfaceVariant,
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    alignSelf: "stretch",
  },
  headline: {
    height: 56,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    paddingLeft: Padding.p_lg,
    alignSelf: "stretch",
  },
  monogramIcon: {
    width: 90,
    height: 90,
  },
  leadingElements: {
    overflow: "hidden",
  },
  headline1: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.m3ReadOnlyDarkSurface21,
    alignSelf: "stretch",
  },
  divider: {
    borderColor: "#cac4d0",
    borderTopWidth: 1,
    height: 1,
  },
  divider1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_lg,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  mycontainer: {
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  sectionHeader1: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  navigationDrawer1: {
    borderRadius: Border.br_md,
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    width: 360,
    padding: Padding.p_sm,
    overflow: "hidden",
    flex: 1,
  },
  navigationDrawer: {
    borderTopRightRadius: Border.br_md,
    borderBottomRightRadius: Border.br_md,
    backgroundColor: Color.m3White,
    width: "100%",
    height: 1752,
    overflow: "hidden",
    flex: 1,
  },
});

export default NavigationDrawer;
