import * as React from "react";
import { useState, useCallback } from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
} from "react-native";
import BasicDialogAkaBottomSheet from "../components/BasicDialogAkaBottomSheet";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const TopAppBar1 = ({ style }) => {
  const [trailingIconVisible, setTrailingIconVisible] = useState(false);

  const openTrailingIcon = useCallback(() => {
    setTrailingIconVisible(true);
  }, []);

  const closeTrailingIcon = useCallback(() => {
    setTrailingIconVisible(false);
  }, []);
  return (
    <>
      <SafeAreaView style={[styles.topAppBar, style]}>
        <View style={styles.view}>
          <Text style={styles.headline}>Products</Text>
          <Pressable style={styles.trailingIcon} onPress={openTrailingIcon}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/trailingicon.png")}
            />
          </Pressable>
        </View>
      </SafeAreaView>

      <Modal animationType="fade" transparent visible={trailingIconVisible}>
        <View style={styles.trailingIconOverlay}>
          <Pressable
            style={styles.trailingIconBg}
            onPress={closeTrailingIcon}
          />
          <BasicDialogAkaBottomSheet onClose={closeTrailingIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  trailingIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  trailingIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  topAppBar: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
  },
  headline: {
    flex: 1,
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  trailingIcon: {
    width: 36,
    height: 36,
  },
  view: {
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default TopAppBar1;
