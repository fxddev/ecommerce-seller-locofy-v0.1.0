import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Border,
  Padding,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";

const MyForms1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myforms, style, styles.topTabContent]}>
      <RNPTextInput
        style={styles.textFieldUsername}
        label="Username"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <RNPTextInput
        style={[styles.textFieldUsername, styles.mt20]}
        label="Email"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <RNPTextInput
        style={[styles.textFieldUsername, styles.mt20]}
        label="Nama"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <RNPTextInput
        style={[styles.textFieldUsername, styles.mt20]}
        label="No Hp"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <View style={[styles.myorigin, styles.mt20]}>
        <RNPTextInput
          style={styles.textFieldUsername}
          label="Kota / Kabupaten"
          mode="outlined"
          placeholderTextColor="#1c1b1f"
          theme={{
            fonts: { regular: { fontFamily: "Roboto" } },
            colors: { text: "#6750a4" },
          }}
        />
        <View style={[styles.myresult, styles.mt10]}>
          <View style={[styles.button, styles.buttonFlexBox8]}>
            <View style={[styles.stateLayer, styles.stateFlexBox]}>
              <Text
                style={[styles.labelText, styles.labelTypo2, styles.labelTypo3]}
              >
                Bekasi
              </Text>
            </View>
          </View>
          <View style={[styles.button1, styles.mt15, styles.buttonFlexBox8]}>
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={[styles.labelText1, styles.labelTypo2]}>
                Jakarta Timur
              </Text>
            </View>
          </View>
          <View style={[styles.button1, styles.mt15, styles.buttonFlexBox8]}>
            <View style={[styles.stateLayer1, styles.stateFlexBox]}>
              <Text style={[styles.labelText1, styles.labelTypo2]}>
                Jakarta Timur
              </Text>
            </View>
          </View>
        </View>
      </View>
      <RNPTextInput
        style={[styles.textFieldUsername, styles.mt20]}
        label="Alamat Lengkap"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <Pressable
        style={[styles.button3, styles.mt20, styles.button3FlexBox]}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
        }
      >
        <View style={[styles.stateLayer3, styles.button3FlexBox]}>
          <Text
            style={[styles.labelText3, styles.labelTypo2, styles.labelTypo3]}
          >
            Simpan
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: Margin.m_md,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  buttonFlexBox8: {
    justifyContent: "center",
    height: 28,
    borderRadius: Border.br_xl,
    alignItems: "center",
    overflow: "hidden",
  },
  stateFlexBox: {
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
  },
  labelTypo3: {
    color: Color.m3White,
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
  },
  button3FlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldUsername: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  labelText: {
    fontSize: FontSize.size_2xs,
    color: Color.m3White,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_3xl,
  },
  button: {
    backgroundColor: Color.m3SysLightPrimary1,
  },
  labelText1: {
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_4xl,
  },
  button1: {
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
  },
  myresult: {
    paddingVertical: Padding.p_md,
    paddingHorizontal: 0,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  myorigin: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  labelText3: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  stateLayer3: {
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
  },
  button3: {
    backgroundColor: Color.m3SysLightPrimary1,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  myforms: {
    paddingVertical: Padding.p_4xl,
    alignItems: "center",
    paddingHorizontal: 0,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default MyForms1;
