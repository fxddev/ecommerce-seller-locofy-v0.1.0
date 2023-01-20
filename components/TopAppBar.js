import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const TopAppBar = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.topAppBar, style]}>
      <View style={styles.view}>
        <Text style={styles.headline}>Products</Text>
        <Pressable
          style={styles.trailingIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/trailingicon.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topAppBar: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
  },
  headline: {
    flex: 1,
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    fontFamily: FontFamily.m3HeadlineSmall1,
    color: Color.m3ReadOnlyDarkSurface21,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  trailingIcon: {
    width: 36,
    height: 36,
  },
  view: {
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default TopAppBar;
