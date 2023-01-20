import * as React from "react";
import { useState, useCallback } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  Modal,
  View,
  TouchableOpacity,
} from "react-native";
import BasicDialogAkaBottomSheet from "../components/BasicDialogAkaBottomSheet";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyItems2 from "../components/MyItems2";
import MyItems1 from "../components/MyItems1";
import MyItems from "../components/MyItems";
import Button6 from "../components/Button6";
import Button5 from "../components/Button2";
import Button4 from "../components/Button1";
import Button3 from "../components/Button3";
import Button2 from "../components/Button";
import Button1 from "../components/Button1";
import {
  Margin,
  Padding,
  Border,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();

const Products = () => {
  const [trailingIconVisible, setTrailingIconVisible] = useState(false);

  const openTrailingIcon = useCallback(() => {
    setTrailingIconVisible(true);
  }, []);

  const closeTrailingIcon = useCallback(() => {
    setTrailingIconVisible(false);
  }, []);
  return (
    <>
      <View style={styles.products}>
        <StatusBar style={styles.subheadParentFlexBox} barStyle="default" />
        <TopTab.Navigator
          style={styles.myfilterToptabs}
          tabBar={({ state, descriptors, navigation, position }) => {
            const [activeItems] = React.useState([
              <Button6 />,
              <Button4 />,
              <Button2 />,
            ]);
            const [normalItems] = React.useState([
              <Button5 />,
              <Button3 />,
              <Button1 />,
            ]);
            const activeIndex = state.index;
            return (
              <View style={styles.topTabBarStyle}>
                {normalItems.map((item, index) => {
                  const isFocused = state.index === index;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        navigation.navigate({
                          name: state.routes[index].name,
                          merge: true,
                        });
                      }}
                    >
                      {activeIndex === index ? activeItems[index] : item}
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          }}
        >
          <TopTab.Screen name="myItems" component={MyItems2} />
          <TopTab.Screen name="myItems1" component={MyItems1} />
          <TopTab.Screen name="myItems2" component={MyItems} />
        </TopTab.Navigator>
      </View>

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
    backgroundColor: "#fffbfe",
  },
  topTabContent: {
    flex: 1,
  },
  myfilterToptabs: {
    width: "100%",
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 38,
    zIndex: 1,
  },
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt4: {
    marginTop: Margin.m_3xs,
  },
  subheadParentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  subheadParentFlexBox1: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  badgesbadgeFlexBox: {
    justifyContent: "flex-end",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_xl,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  darkSegment1Layout: {
    height: 80,
    alignItems: "center",
  },
  labelTypo: {
    letterSpacing: 1,
    fontSize: FontSize.size_2xs,
    width: 103,
    textAlign: "center",
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  products: {
    backgroundColor: Color.m3White,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Products;
