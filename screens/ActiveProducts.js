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
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const ActiveProducts = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.activeproducts, styles.activeproductsLayout]}>
      <StatusBar style={styles.subheadParentFlexBox} barStyle="default" />
      <View style={styles.myfilter}>
        <ScrollView
          style={[styles.myscrollhorizontal, styles.activeproductsLayout]}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.myScrollHorizontalScrollViewContent}
        >
          <View
            style={[
              styles.button2,
              styles.ml15,
              styles.buttonLayout,
              styles.buttonBorder,
            ]}
          >
            <View style={[styles.stateLayer2, styles.stateFlexBox]}>
              <Text style={styles.labelText}>Non Active</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.myproducts} />
      <View style={styles.myproducts} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  activeproductsLayout: {
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
  stateFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  myitemsSpaceBlock: {
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
  stateLayer2: {
    paddingHorizontal: Padding.p_4xl,
    alignItems: "center",
  },
  button2: {
    zIndex: 0,
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
    display: "none",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  activeproducts: {
    backgroundColor: Color.m3White,
    overflow: "hidden",
  },
});

export default ActiveProducts;
