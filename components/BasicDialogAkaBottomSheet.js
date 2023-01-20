import * as React from "react";
import { useState, useCallback } from "react";
import { View, StyleSheet, Image, Text, Pressable, Modal } from "react-native";
import BasicDialogModalConfirmLogou from "../components/BasicDialogModalConfirmLogou";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const BasicDialogAkaBottomSheet = ({ onClose }) => {
  const [button1Visible, setButton1Visible] = useState(false);
  const navigation = useNavigation();

  const openButton1 = useCallback(() => {
    setButton1Visible(true);
  }, []);

  const closeButton1 = useCallback(() => {
    setButton1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.basicDialogAkabottomsheet}>
        <View style={styles.sheetHeader}>
          <View style={styles.dragHandle} />
        </View>
        <View style={styles.mycontainer}>
          <View style={[styles.leadingElements, styles.buttonFlexBox]}>
            <Image
              style={styles.monogramIcon}
              resizeMode="cover"
              source={require("../assets/monogram.png")}
            />
          </View>
          <Text style={[styles.headline, styles.mt25]}>Nama toko</Text>
          <Pressable
            style={[styles.button, styles.mt25, styles.buttonFlexBox]}
            onPress={() =>
              navigation.navigate("DrawerRoot", { screen: "ProfilePage1" })
            }
          >
            <View style={[styles.stateLayer, styles.buttonFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon6.png")}
              />
              <Text style={[styles.labelText, styles.ml8, styles.labelTypo]}>
                Lihat Profile
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.mt25, styles.buttonFlexBox]}
            onPress={openButton1}
          >
            <View style={[styles.stateLayer, styles.buttonFlexBox]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon5.png")}
              />
              <Text style={[styles.labelText1, styles.ml8, styles.labelTypo]}>
                Log Out
              </Text>
            </View>
          </Pressable>
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
  mt25: {
    marginTop: Margin.m_2xl,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  labelTypo: {
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  dragHandle: {
    backgroundColor: Color.m3SysLightOutline,
    width: 32,
    height: 4,
    opacity: 0.4,
    borderRadius: Border.br_xl,
  },
  sheetHeader: {
    padding: Padding.p_lg,
    alignItems: "center",
    alignSelf: "stretch",
  },
  monogramIcon: {
    width: 90,
    height: 90,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  leadingElements: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  headline: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignSelf: "stretch",
  },
  icon: {
    width: 18,
    height: 18,
  },
  labelText: {
    color: Color.m3SysLightPrimary1,
  },
  stateLayer: {
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
    alignItems: "center",
  },
  button: {
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    borderRadius: Border.br_xl,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  labelText1: {
    color: Color.m3White,
  },
  button1: {
    backgroundColor: Color.m3SysLightPrimary1,
    borderRadius: Border.br_xl,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mycontainer: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  basicDialogAkabottomsheet: {
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    width: 960,
    alignItems: "flex-end",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default BasicDialogAkaBottomSheet;
