import * as React from "react";
import { useState, useCallback } from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  View,
  Text,
  Modal,
  ScrollView,
} from "react-native";
import BasicDialogModalConfirmHapus from "../components/BasicDialogModalConfirmHapus";
import {
  TextInput as RNPTextInput,
  Switch as RNPSwitch,
} from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
} from "../GlobalStyles";

const ProductDetails = () => {
  const [trailingIcon3Visible, setTrailingIcon3Visible] = useState(false);
  const [textFieldKondisiOpen, setTextFieldKondisiOpen] = useState(false);
  const [textFieldKondisiValue, setTextFieldKondisiValue] = useState("Baru");
  const [textFieldKondisiItems, setTextFieldKondisiItems] = useState([
    { value: "Baru", label: "Baru" },
    { value: "Bekas", label: "Bekas" },
  ]);
  const [switchValue, setSwitchValue] = useState(true);
  const navigation = useNavigation();

  const openTrailingIcon3 = useCallback(() => {
    setTrailingIcon3Visible(true);
  }, []);

  const closeTrailingIcon3 = useCallback(() => {
    setTrailingIcon3Visible(false);
  }, []);
  return (
    <>
      <View style={styles.productdetails}>
        <StatusBar style={styles.divstatusFlexBox} barStyle="default" />
        <View style={[styles.topAppBar, styles.topAppBarFlexBox]}>
          <Pressable
            style={[styles.leadingIcon, styles.containerFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <View style={[styles.container, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.containerFlexBox]}>
                <Image
                  style={styles.iconsarrowBack24px}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-back-24px.png")}
                />
              </View>
            </View>
          </Pressable>
          <Text style={[styles.headline, styles.ml4, styles.headlineTypo]}>
            Product Details
          </Text>
          <View
            style={[styles.trailingIcon, styles.ml4, styles.topAppBarFlexBox]}
          >
            <View style={[styles.leadingIcon, styles.containerFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={[styles.stateLayer, styles.containerFlexBox]}>
                  <Image
                    style={styles.iconsarrowBack24px}
                    resizeMode="cover"
                    source={require("../assets/iconsattach-file-24px.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.leadingIcon, styles.containerFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={[styles.stateLayer, styles.containerFlexBox]}>
                  <Image
                    style={styles.iconsarrowBack24px}
                    resizeMode="cover"
                    source={require("../assets/iconstoday-24px.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.leadingIcon, styles.containerFlexBox]}
              onPress={openTrailingIcon3}
            >
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={[styles.stateLayer, styles.containerFlexBox]}>
                  <Image
                    style={styles.iconsarrowBack24px}
                    resizeMode="cover"
                    source={require("../assets/iconsmore-vert-24px.png")}
                  />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
        <ScrollView
          style={styles.mycontainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.myContainerScrollViewContent}
        >
          <RNPTextInput
            style={styles.textFieldNama}
            label="Nama"
            disabled
            mode="outlined"
            placeholderTextColor="#1c1b1f"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#6750a4" },
            }}
          />
          <RNPTextInput
            style={[styles.textFieldNama, styles.mt20]}
            label="Harga"
            error
            mode="outlined"
            placeholderTextColor="#1c1b1f"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#6750a4" },
            }}
          />
          <RNPTextInput
            style={[styles.textFieldNama, styles.mt20]}
            label="Deskripsi"
            mode="outlined"
            placeholderTextColor="#1c1b1f"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#6750a4" },
            }}
          />
          <View style={[styles.textFieldNama, styles.mt20]}>
            <DropDownPicker
              open={textFieldKondisiOpen}
              setOpen={setTextFieldKondisiOpen}
              value={textFieldKondisiValue}
              setValue={setTextFieldKondisiValue}
              items={textFieldKondisiItems}
              labelStyle={styles.textFieldKondisiValue}
              textStyle={styles.textFieldKondisiText}
            />
          </View>
          <RNPTextInput
            style={[styles.textFieldNama, styles.mt20]}
            label="Minimum Pembelian"
            mode="outlined"
            placeholderTextColor="#1c1b1f"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#6750a4" },
            }}
          />
          <RNPTextInput
            style={[styles.textFieldNama, styles.mt20]}
            label="Berat"
            mode="outlined"
            placeholderTextColor="#1c1b1f"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#6750a4" },
            }}
          />
          <RNPTextInput
            style={[styles.textFieldNama, styles.mt20]}
            label="Stock"
            mode="outlined"
            placeholderTextColor="#1c1b1f"
            theme={{
              fonts: { regular: { fontFamily: "Roboto" } },
              colors: { text: "#6750a4" },
            }}
          />
          <View
            style={[
              styles.topAppBarFlexBox,
              styles.mt20,
              styles.divstatusFlexBox,
            ]}
          >
            <Text style={[styles.inputText, styles.headlineTypo]}>Status</Text>
            <RNPSwitch
              style={styles.switch}
              value={switchValue}
              onValueChange={setSwitchValue}
              color="#6750a4"
            />
          </View>
        </ScrollView>
      </View>

      <Modal animationType="fade" transparent visible={trailingIcon3Visible}>
        <View style={styles.trailingIcon3Overlay}>
          <Pressable
            style={styles.trailingIcon3Bg}
            onPress={closeTrailingIcon3}
          />
          <BasicDialogModalConfirmHapus onClose={closeTrailingIcon3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  trailingIcon3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  trailingIcon3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ml4: {
    marginLeft: Margin.m_3xs,
  },
  textFieldKondisiValue: {
    color: "#1c1b1f",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  textFieldKondisiText: {
    color: "#6750a4",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  myContainerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 37,
  },
  divstatusFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  topAppBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  headlineTypo: {
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
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
    borderRadius: Border.br_xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  leadingIcon: {
    width: 48,
    height: 48,
  },
  headline: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    flex: 1,
  },
  trailingIcon: {
    justifyContent: "flex-end",
    height: 48,
  },
  topAppBar: {
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    height: 56,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  textFieldNama: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  inputText: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
  },
  switch: {
    width: 52,
    height: 32,
  },
  mycontainer: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  productdetails: {
    backgroundColor: Color.m3White,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default ProductDetails;
