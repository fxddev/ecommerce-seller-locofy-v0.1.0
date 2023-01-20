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
  FontSize,
  FontFamily,
  Color,
  Padding,
} from "../GlobalStyles";

const MyForms = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myforms, style, styles.topTabContent]}>
      <RNPTextInput
        style={styles.textFieldPasswordLama}
        label="Password Lama"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <RNPTextInput
        style={[styles.textFieldPasswordLama, styles.mt20]}
        label="Password Baru"
        mode="outlined"
        placeholderTextColor="#1c1b1f"
        theme={{
          fonts: { regular: { fontFamily: "Roboto" } },
          colors: { text: "#6750a4" },
        }}
      />
      <Pressable
        style={[styles.button, styles.mt20, styles.buttonFlexBox5]}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
        }
      >
        <View style={[styles.stateLayer, styles.buttonFlexBox5]}>
          <Text style={styles.labelText}>Ubah Password</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: Margin.m_xl,
  },
  buttonFlexBox5: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textFieldPasswordLama: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3White,
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
    overflow: "hidden",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  myforms: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xl,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default MyForms;
