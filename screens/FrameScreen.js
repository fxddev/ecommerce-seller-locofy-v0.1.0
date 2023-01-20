import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Modal, View } from "react-native";
import BottomSheet from "../components/BottomSheet";
import { Color } from "../GlobalStyles";

const FrameScreen = () => {
  const [ellipseImageVisible, setEllipseImageVisible] = useState(false);

  const openEllipseImage = useCallback(() => {
    setEllipseImageVisible(true);
  }, []);

  const closeEllipseImage = useCallback(() => {
    setEllipseImageVisible(false);
  }, []);
  return (
    <>
      <View style={styles.ellipseParent}>
        <Pressable style={styles.wrapper} onPress={openEllipseImage}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={ellipseImageVisible}>
        <View style={styles.ellipseImageOverlay}>
          <Pressable
            style={styles.ellipseImageBg}
            onPress={closeEllipseImage}
          />
          <BottomSheet onClose={closeEllipseImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  ellipseImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipseImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    left: 140,
    top: 23,
    width: 85,
    height: 91,
  },
  ellipseParent: {
    backgroundColor: Color.m3White,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default FrameScreen;
