import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Color,
  FontFamily,
  Border,
  FontSize,
} from "../GlobalStyles";

const JoinPage1 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.joinpage1,
        styles.joinpage1FlexBox,
        styles.joinpage1FlexBox1,
      ]}
    >
      <StatusBar
        style={[styles.myactionsFlexBox, styles.stateLayerSpaceBlock]}
        barStyle="default"
      />
      <LinearGradient
        style={[
          styles.mybackground,
          styles.joinpage1FlexBox,
          styles.joinpage1FlexBox1,
        ]}
        locations={[0, 0.92, 1]}
        colors={["#6750a4", "#3566d1", "#007dff"]}
      >
        <View style={[styles.mycontainer, styles.joinpage1FlexBox]}>
          <Text style={[styles.headline, styles.headlineTypo]}>
            Berjualan Sekarang!
          </Text>
          <RNPTextInput
            style={[styles.textField, styles.mt20]}
            label="Username / Email"
            mode="outlined"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#fff" },
            }}
          />
          <View
            style={[styles.myactions, styles.mt20, styles.myactionsFlexBox]}
          >
            <View style={[styles.button, styles.buttonBorder]}>
              <View style={[styles.stateLayer, styles.stateLayerSpaceBlock]}>
                <Text style={[styles.labelText, styles.headlineTypo]}>
                  Kembali
                </Text>
              </View>
            </View>
            <TouchableHighlight
              style={[styles.button1, styles.buttonBorder]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("JoinPage2")}
            >
              <View style={[styles.stateLayer, styles.stateLayerSpaceBlock]}>
                <Text style={[styles.labelText, styles.headlineTypo]}>
                  Next
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: Margin.m_xl,
  },
  joinpage1FlexBox: {
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  joinpage1FlexBox1: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  myactionsFlexBox: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  stateLayerSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
  },
  headlineTypo: {
    textAlign: "center",
    color: Color.m3White,
    fontFamily: FontFamily.m3HeadlineSmall1,
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    justifyContent: "center",
    overflow: "hidden",
  },
  headline: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    alignSelf: "stretch",
  },
  textField: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    height: 56,
    alignSelf: "stretch",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
  },
  stateLayer: {
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
  },
  button1: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  myactions: {
    paddingTop: 40,
    paddingBottom: Padding.p_2xs,
  },
  mycontainer: {
    padding: Padding.p_2xl,
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "flex-end",
    overflow: "hidden",
    height: 1752,
  },
  mybackground: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  joinpage1: {
    backgroundColor: Color.m3White,
    width: "100%",
    height: 1752,
    alignItems: "center",
    flex: 1,
  },
});

export default JoinPage1;
