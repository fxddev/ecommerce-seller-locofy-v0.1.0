import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyForms1 from "../components/MyForms1";
import MyForms from "../components/MyForms";
import Button11 from "../components/Button11";
import Button10 from "../components/Button5";
import Button9 from "../components/Button4";
import Button8 from "../components/Button8";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();

const ProfilePage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profilepage1, styles.mycontainerFlexBox]}>
      <StatusBar
        style={[styles.stateSpaceBlock, styles.stateLayer1SpaceBlock]}
        barStyle="default"
      />
      <View style={styles.topAppBar}>
        <Pressable
          style={[styles.leadingIcon, styles.stateFlexBox]}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.button3FlexBox}>
            <View style={[styles.stateLayer, styles.stateFlexBox]}>
              <Image
                style={styles.iconsarrowBack24px}
                resizeMode="cover"
                source={require("../assets/iconsarrow-back-24px.png")}
              />
            </View>
          </View>
        </Pressable>
        <Text style={[styles.headline, styles.ml4]}>Profile</Text>
      </View>
      <ScrollView
        style={[styles.mycontainer, styles.mycontainerFlexBox]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.myContainerScrollViewContent}
      >
        <TopTab.Navigator
          style={styles.mytabToptabs}
          tabBar={({ state, descriptors, navigation, position }) => {
            const [activeItems] = React.useState([<Button11 />, <Button9 />]);
            const [normalItems] = React.useState([<Button10 />, <Button8 />]);
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
          <TopTab.Screen name="myForms" component={MyForms1} />
          <TopTab.Screen name="myForms1" component={MyForms} />
        </TopTab.Navigator>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_3xs,
  },
  topTabContent: {
    flex: 1,
  },
  mytabToptabs: {
    width: "100%",
    height: 878,
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 28,
    zIndex: 1,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  myContainerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mycontainerFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  stateSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  stateLayer1SpaceBlock: {
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
  },
  stateFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  myformsSpaceBlock: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  buttonLayout: {
    height: 28,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  labelTypo1: {
    color: Color.m3White,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
  },
  button3FlexBox: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconsarrowBack24px: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  leadingIcon: {
    width: 48,
    height: 48,
  },
  headline: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "left",
    width: 349,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  topAppBar: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mycontainer: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  profilepage1: {
    backgroundColor: Color.m3White,
    width: "100%",
    overflow: "hidden",
  },
});

export default ProfilePage1;
