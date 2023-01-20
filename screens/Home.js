import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  Image,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <StatusBar style={styles.mycontainerSpaceBlock} barStyle="default" />
      <View style={[styles.mycontainer, styles.mycontainerSpaceBlock]}>
        <View style={[styles.topAppBar, styles.topAppBarFlexBox]}>
          <Text style={styles.headline}>Home</Text>
          <Pressable
            style={styles.trailingIcon}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/trailingicon.png")}
            />
          </Pressable>
        </View>
        <ScrollView
          style={[styles.myhome, styles.mt15]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.myHomeScrollViewContent}
        >
          <View style={[styles.horizontalCard, styles.topAppBarFlexBox]}>
            <View style={styles.content}>
              <View style={styles.text}>
                <Text style={styles.header}>Pesanan diterima</Text>
                <Text style={[styles.subhead, styles.mt4]}>2</Text>
              </View>
            </View>
            <View style={[styles.inactiveOrderWrapper, styles.ml16]}>
              <View style={styles.inactiveOrder}>
                <Image
                  style={styles.inactiveOrderIcon}
                  resizeMode="cover"
                  source={require("../assets/inactive-order.png")}
                />
              </View>
            </View>
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
                <Text style={styles.header}>Sedang dikirim</Text>
                <Text style={[styles.subhead, styles.mt4]}>2</Text>
              </View>
            </View>
            <View style={[styles.inactiveOrderWrapper, styles.ml16]}>
              <View style={styles.inactiveOrder}>
                <Image
                  style={styles.inactiveOrderIcon}
                  resizeMode="cover"
                  source={require("../assets/schedule-send.png")}
                />
              </View>
            </View>
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
                <Text style={styles.header}>Pesanan selesai</Text>
                <Text style={[styles.subhead, styles.mt4]}>20</Text>
              </View>
            </View>
            <View style={[styles.inactiveOrderWrapper, styles.ml16]}>
              <View style={styles.inactiveOrder}>
                <Image
                  style={styles.inactiveOrderIcon}
                  resizeMode="cover"
                  source={require("../assets/grading.png")}
                />
              </View>
            </View>
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
  mycontainerSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  topAppBarFlexBox: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  darkLayout: {
    width: 164,
    alignItems: "center",
  },
  baseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_2xs,
    width: 103,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  headline: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    display: "flex",
    width: 342,
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  trailingIcon: {
    width: 36,
    height: 36,
  },
  topAppBar: {
    justifyContent: "space-between",
  },
  header: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignSelf: "stretch",
  },
  subhead: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
    fontFamily: FontFamily.m3HeadlineSmall1,
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inactiveOrderIcon: {
    width: 25,
    height: 25,
  },
  inactiveOrder: {
    backgroundColor: Color.gray_400,
    padding: Padding.p_2xl,
    flexDirection: "row",
  },
  inactiveOrderWrapper: {
    backgroundColor: Color.gray_300,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
  },
  myhome: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  mycontainer: {
    height: 341,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
  },
  home: {
    backgroundColor: Color.m3White,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Home;
