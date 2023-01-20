import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  View,
  Text,
  ScrollView,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const ProfilePage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profilepage2, styles.mycontainerFlexBox]}>
      <StatusBar
        style={[styles.stateSpaceBlock, styles.stateLayer2SpaceBlock]}
        barStyle="default"
      />
      <View style={[styles.topAppBar, styles.myformsFlexBox]}>
        <Pressable
          style={[styles.leadingIcon, styles.stateFlexBox]}
          onPress={() => navigation.goBack()}
        >
          <View style={[styles.container, styles.buttonFlexBox1]}>
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
        <View style={styles.mytab} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_3xs,
  },
  ml15: {
    marginLeft: Margin.m_md,
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
  stateLayer2SpaceBlock: {
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
  },
  myformsFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  stateFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFlexBox1: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonFlexBox: {
    backgroundColor: Color.m3SysLightPrimary1,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  labelTypo: {
    color: Color.m3White,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  iconsarrowBack24px: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  container: {
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
    flexDirection: "row",
  },
  mytab: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mycontainer: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  profilepage2: {
    backgroundColor: Color.m3White,
    width: "100%",
    overflow: "hidden",
  },
});

export default ProfilePage2;
