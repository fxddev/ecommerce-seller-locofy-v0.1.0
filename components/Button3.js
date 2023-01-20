import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const Button7 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.button, style, styles.buttonFlexBox4]}
      onPress={() => navigation.navigate("ProfilePage1")}
    >
      <View style={[styles.stateLayer, styles.buttonFlexBox4]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon6.png")}
        />
        <Text style={[styles.labelText, styles.ml8]}>Lihat Profile</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  buttonFlexBox4: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 18,
    height: 18,
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3SysLightPrimary1,
    textAlign: "center",
  },
  stateLayer: {
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default Button7;
