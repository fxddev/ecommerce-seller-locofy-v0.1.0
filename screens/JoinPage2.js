import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  Color,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const JoinPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.joinpage2, styles.joinpage2FlexBox]}>
      <View style={styles.devicedeviceFrameComponents}>
        <Text style={styles.time}>9:30</Text>
        <Image
          style={styles.cameraCutoutIcon}
          resizeMode="cover"
          source={require("../assets/camera-cutout.png")}
        />
        <Image
          style={styles.rightIcons}
          resizeMode="cover"
          source={require("../assets/right-icons.png")}
        />
      </View>
      <ScrollView
        style={[styles.mycontainer, styles.joinpage2FlexBox]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.myContainerScrollViewContent}
      >
        <Text style={[styles.headline, styles.headlineTypo]}>
          Daftar Sebelum Berjualan!
        </Text>
        <RNPTextInput
          style={[styles.textFieldUsername, styles.mt15]}
          label="Username"
          disabled
          mode="outlined"
          placeholderTextColor="#1c1b1f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#6750a4" },
          }}
        />
        <RNPTextInput
          style={[styles.textFieldUsername, styles.mt15]}
          label="Nama"
          mode="outlined"
          placeholderTextColor="#1c1b1f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#6750a4" },
          }}
        />
        <RNPTextInput
          style={[styles.textFieldUsername, styles.mt15]}
          label="Email"
          mode="outlined"
          placeholderTextColor="#1c1b1f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#6750a4" },
          }}
        />
        <RNPTextInput
          style={[styles.textFieldUsername, styles.mt15]}
          label="Password"
          mode="outlined"
          placeholderTextColor="#1c1b1f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#6750a4" },
          }}
        />
        <RNPTextInput
          style={[styles.textFieldUsername, styles.mt15]}
          label="Password Confirm"
          mode="outlined"
          placeholderTextColor="#1c1b1f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#6750a4" },
          }}
        />
        <TouchableHighlight
          style={[styles.button, styles.mt15, styles.buttonFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
          }
        >
          <View style={[styles.stateLayer, styles.buttonFlexBox]}>
            <Text style={[styles.labelText, styles.headlineTypo]}>
              Join Now
            </Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: Margin.m_md,
  },
  myContainerScrollViewContent: {
    flexDirection: "column",
  },
  joinpage2FlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  headlineTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    width: 24,
    height: 24,
    display: "none",
  },
  rightIcons: {
    width: 46,
    height: 17,
  },
  devicedeviceFrameComponents: {
    height: 40,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  headline: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    color: Color.m3ReadOnlyDarkSurface21,
    alignSelf: "stretch",
  },
  textFieldUsername: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  labelText: {
    letterSpacing: 0,
    color: Color.m3White,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  stateLayer: {
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
  },
  button: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.m3SysLightPrimary1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mycontainer: {
    padding: Padding.p_2xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  joinpage2: {
    backgroundColor: Color.m3White,
    width: "100%",
    overflow: "hidden",
  },
});

export default JoinPage2;
