import * as React from "react";
import { Text, StyleSheet, Image, View, ScrollView } from "react-native";
import {
  Margin,
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
} from "../GlobalStyles";

const Home1 = () => {
  return (
    <View style={styles.home}>
      <View
        style={[
          styles.devicedeviceFrameComponents,
          styles.navigationBarFlexBox,
          styles.mycontainerSpaceBlock,
        ]}
      >
        <Text style={styles.time}>9:30</Text>
        <Image
          style={[styles.cameraCutoutIcon, styles.inactiveiconLayout]}
          resizeMode="cover"
          source={require("../assets/camera-cutout1.png")}
        />
        <Image
          style={styles.rightIcons}
          resizeMode="cover"
          source={require("../assets/right-icons.png")}
        />
      </View>
      <View
        style={[
          styles.mycontainer,
          styles.mycontainerSpaceBlock,
          styles.myhomeFlexBox,
        ]}
      >
        <View style={[styles.topAppBar, styles.topAppBarFlexBox]}>
          <Text style={styles.headline}>Home</Text>
        </View>
        <ScrollView
          style={[styles.myhome, styles.mt15, styles.myhomeFlexBox]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.myHomeScrollViewContent}
        >
          <View style={[styles.horizontalCard, styles.topAppBarFlexBox]}>
            <View style={styles.content}>
              <View style={styles.text}>
                <Text style={[styles.header, styles.headerFlexBox]}>
                  Pesanan diterima
                </Text>
                <Text
                  style={[styles.subhead, styles.mt4, styles.headerFlexBox]}
                >
                  2
                </Text>
              </View>
            </View>
            <Image
              style={[styles.mediaIcon, styles.ml16]}
              resizeMode="cover"
              source={require("../assets/media.png")}
            />
          </View>
          <View
            style={[
              styles.horizontalCard,
              styles.mt15,
              styles.topAppBarFlexBox,
            ]}
          >
            <View style={styles.content}>
              <View style={styles.text}>
                <Text style={[styles.header, styles.headerFlexBox]}>
                  Pesanan diterima
                </Text>
                <Text
                  style={[styles.subhead, styles.mt4, styles.headerFlexBox]}
                >
                  2
                </Text>
              </View>
            </View>
            <Image
              style={[styles.mediaIcon, styles.ml16]}
              resizeMode="cover"
              source={require("../assets/media1.png")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_3xs,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  myHomeScrollViewContent: {
    flexDirection: "column",
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  navigationBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mycontainerSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    overflow: "hidden",
  },
  inactiveiconLayout: {
    height: 24,
    width: 24,
  },
  myhomeFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  topAppBarFlexBox: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  headerFlexBox: {
    letterSpacing: 0,
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignSelf: "stretch",
  },
  darkLayout: {
    width: 114,
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_2xs,
    width: 103,
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
  },
  time: {
    letterSpacing: 0.1,
    color: Color.gray_800,
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  cameraCutoutIcon: {
    display: "none",
  },
  rightIcons: {
    width: 46,
    height: 17,
  },
  devicedeviceFrameComponents: {
    height: 45,
    paddingHorizontal: Padding.p_3xl,
    alignItems: "flex-end",
  },
  headline: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    display: "flex",
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  topAppBar: {
    height: 28,
    justifyContent: "center",
  },
  header: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    letterSpacing: 0,
  },
  subhead: {
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  text: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  mediaIcon: {
    width: 80,
    height: 80,
  },
  horizontalCard: {
    borderRadius: Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    alignItems: "center",
    flex: 1,
  },
  myhome: {
    overflow: "hidden",
  },
  mycontainer: {
    paddingHorizontal: Padding.p_2xl,
  },
  home: {
    backgroundColor: Color.m3White,
    width: "100%",
    height: 294,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Home1;
