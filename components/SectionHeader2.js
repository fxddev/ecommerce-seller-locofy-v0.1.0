import * as React from "react";
import { useState, useCallback } from "react";
import {
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
} from "react-native";
import BasicDialogModalConfirmLogou from "../components/BasicDialogModalConfirmLogou";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const SectionHeader2 = ({ style }) => {
  const [buttonVisible, setButtonVisible] = useState(false);

  const openButton = useCallback(() => {
    setButtonVisible(true);
  }, []);

  const closeButton = useCallback(() => {
    setButtonVisible(false);
  }, []);
  return (
    <>
      <View style={[styles.sectionHeader2, style, styles.mycontainerFlexBox]}>
        <View style={[styles.mycontainer, styles.mycontainerFlexBox]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox3]}
            onPress={openButton}
          >
            <View style={[styles.stateLayer, styles.buttonFlexBox3]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon5.png")}
              />
              <Text style={[styles.labelText, styles.ml8]}>Log Out</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonVisible}>
        <View style={styles.buttonOverlay}>
          <Pressable style={styles.buttonBg} onPress={closeButton} />
          <BasicDialogModalConfirmLogou onClose={closeButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  buttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mycontainerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  buttonFlexBox3: {
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
    color: Color.m3White,
    textAlign: "center",
  },
  stateLayer: {
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
  },
  button: {
    backgroundColor: Color.m3SysLightPrimary1,
    overflow: "hidden",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  mycontainer: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flex: 1,
  },
  sectionHeader2: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flex: 1,
  },
});

export default SectionHeader2;
