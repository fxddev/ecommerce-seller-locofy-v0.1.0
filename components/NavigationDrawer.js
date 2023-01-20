import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Margin,
  Padding,
  FontSize,
  FontFamily,
  Border,
  Color,
} from "../GlobalStyles";

const NavigationDrawer1 = ({ style }) => {
  return (
    <View style={[styles.navigationDrawer, style]}>
      <View style={styles.productLockup}>
        <View style={[styles.spLockup, styles.leftFlexBox]}>
          <Image
            style={styles.googleLogo18Icon}
            resizeMode="cover"
            source={require("../assets/google-logo-18.png")}
          />
          <Text style={[styles.product, styles.ml4]}>Title</Text>
        </View>
      </View>
      <View style={[styles.sectionHeader, styles.dividerSpaceBlock]}>
        <View style={styles.leftFlexBox}>
          <Text style={[styles.label, styles.labelTypo4]}>Section Header</Text>
        </View>
      </View>
      <View style={[styles.navItem, styles.navItemSpaceBlock]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon14.png")}
        />
        <View style={[styles.text, styles.ml12, styles.textFlexBox]}>
          <Text style={[styles.label1, styles.labelTypo4]}>Label</Text>
          <Text style={[styles.label1, styles.labelTypo4]}>100+</Text>
        </View>
      </View>
      <View style={[styles.navItem1, styles.navItemSpaceBlock]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons02.png")}
        />
        <View style={[styles.textFlexBox, styles.ml12]}>
          <Text style={[styles.label, styles.labelTypo4]}>Label</Text>
        </View>
      </View>
      <View style={[styles.navItem1, styles.navItemSpaceBlock]}>
        <View style={styles.icon}>
          <View style={styles.icon1} />
        </View>
        <View style={[styles.textFlexBox, styles.ml12]}>
          <Text style={[styles.label, styles.labelTypo4]}>Label</Text>
        </View>
      </View>
      <View style={[styles.navItem1, styles.navItemSpaceBlock]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icons04.png")}
        />
        <View style={[styles.textFlexBox, styles.ml12]}>
          <Text style={[styles.label, styles.labelTypo4]}>Label</Text>
        </View>
      </View>
      <View style={[styles.divider, styles.dividerSpaceBlock]}>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_3xs,
  },
  ml12: {
    marginLeft: Margin.m_sm,
  },
  leftFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dividerSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  labelTypo4: {
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    letterSpacing: 0,
  },
  navItemSpaceBlock: {
    paddingBottom: Padding.p_lg,
    paddingRight: Padding.p_3xl,
    paddingTop: Padding.p_lg,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: Padding.p_lg,
    height: 56,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textFlexBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  googleLogo18Icon: {
    width: 59,
    height: 20,
    display: "none",
  },
  product: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.m3HeadlineSmall1,
    letterSpacing: 0,
    color: Color.m3SysLightOnSurfaceVariant,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  spLockup: {
    alignSelf: "stretch",
  },
  productLockup: {
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    paddingLeft: Padding.p_lg,
    height: 56,
    alignSelf: "stretch",
  },
  label: {
    color: Color.m3SysLightOnSurfaceVariant,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  sectionHeader: {
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_lg,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    width: 24,
    height: 24,
  },
  label1: {
    color: Color.gray_900,
  },
  text: {
    justifyContent: "space-between",
  },
  navItem: {
    backgroundColor: Color.gray_200,
  },
  navItem1: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    paddingBottom: Padding.p_lg,
    paddingRight: Padding.p_3xl,
    paddingTop: Padding.p_lg,
  },
  icon1: {
    position: "absolute",
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
    backgroundColor: Color.gray_900,
  },
  line: {
    backgroundColor: Color.m3SysLightOutline,
    height: 1,
    alignSelf: "stretch",
  },
  divider: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  navigationDrawer: {
    borderRadius: Border.br_md,
    width: 360,
    padding: Padding.p_sm,
    overflow: "hidden",
    backgroundColor: Color.m3ReadOnlyLightSurface3,
  },
});

export default NavigationDrawer1;
