import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  ScrollView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const NonActiveProducts = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.nonactiveproducts, styles.nonactiveproductsLayout]}>
      <StatusBar style={styles.subheadParentFlexBox} barStyle="default" />
      <View style={styles.myfilter}>
        <ScrollView
          style={[styles.myscrollhorizontal, styles.nonactiveproductsLayout]}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.myScrollHorizontalScrollViewContent}
        >
          <View
            style={[styles.button, styles.buttonLayout, styles.buttonBorder]}
          >
            <View style={[styles.stateLayer, styles.stateFlexBox]}>
              <Text style={styles.labelText}>All</Text>
            </View>
          </View>
          <View
            style={[
              styles.button1,
              styles.ml15,
              styles.buttonLayout,
              styles.buttonBorder,
            ]}
          >
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={styles.labelText}>Active</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={[styles.mycontainer, styles.viewSpaceBlock]}>
        <View style={styles.myproducts} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topAppBar: {
    backgroundColor: "#fffbfe",
  },
  ml15: {
    marginLeft: Margin.m_md,
  },
  myScrollHorizontalScrollViewContent: {
    flexDirection: "row",
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  nonactiveproductsLayout: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  subheadParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  buttonLayout: {
    height: 28,
    borderRadius: Border.br_xl,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: "#79747e",
    borderStyle: "solid",
    height: 28,
  },
  stateFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  textTypo: {
    color: Color.m3White,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  fabShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  headerTypo: {
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  labelText: {
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  stateLayer: {
    alignItems: "center",
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "center",
  },
  button: {
    zIndex: 2,
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_4xl,
    alignItems: "center",
  },
  button1: {
    zIndex: 1,
  },
  myscrollhorizontal: {
    overflow: "hidden",
  },
  myfilter: {
    paddingLeft: Padding.p_2xl,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_4xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  myproducts: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mycontainer: {
    display: "none",
    paddingVertical: Padding.p_2xs,
  },
  nonactiveproducts: {
    backgroundColor: Color.m3White,
    overflow: "hidden",
  },
});

export default NonActiveProducts;
