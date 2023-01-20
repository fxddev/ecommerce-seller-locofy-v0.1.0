import * as React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
} from "../GlobalStyles";

const MyItems2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.myitems, style, styles.topTabContent]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.myItemsScrollViewContent}
    >
      <Pressable
        style={styles.horizontalCard}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.horizontalCard, styles.mt15]}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge1, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Non Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.horizontalCard, styles.mt15]}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge1, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Non Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.horizontalCard, styles.mt15]}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.horizontalCard, styles.mt15]}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge1, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Non Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.horizontalCard, styles.mt15]}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.horizontalCard, styles.mt15]}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <View style={[styles.content, styles.contentFlexBox2]}>
          <View style={styles.fab}>
            <Image
              style={styles.containerIcon}
              resizeMode="cover"
              source={require("../assets/container.png")}
            />
          </View>
          <View style={[styles.text, styles.ml16]}>
            <Text
              style={[styles.header, styles.subheadTypo2, styles.headerLayout2]}
            >
              Nama product 1000000
            </Text>
            <Text style={[styles.subhead, styles.subheadTypo2]}>Stok: 10</Text>
            <View style={[styles.subheadParent, styles.contentFlexBox2]}>
              <Text
                style={[
                  styles.subhead1,
                  styles.subheadTypo2,
                  styles.headerLayout2,
                ]}
              >
                Rp. 15.000
              </Text>
              <View style={[styles.badgesbadge1, styles.badgesbadgeFlexBox]}>
                <Text style={styles.text1}>Non Active</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_lg,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  myItemsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentFlexBox2: {
    alignItems: "center",
    flexDirection: "row",
  },
  subheadTypo2: {
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
    fontFamily: FontFamily.m3HeadlineSmall1,
    letterSpacing: 0,
  },
  headerLayout2: {
    lineHeight: 24,
    textAlign: "left",
    color: Color.m3ReadOnlyDarkSurface21,
  },
  badgesbadgeFlexBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  containerIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_md,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fab: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 8,
    elevation: 8,
    width: 65,
    height: 65,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  header: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  subhead: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    alignSelf: "stretch",
  },
  subhead1: {
    fontSize: FontSize.size_sm,
    width: 237,
  },
  text1: {
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    color: Color.m3White,
    textAlign: "center",
    fontFamily: FontFamily.m3HeadlineSmall1,
    letterSpacing: 0,
  },
  badgesbadge: {
    backgroundColor: Color.green,
  },
  subheadParent: {
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
  },
  content: {
    paddingLeft: Padding.p_4xs,
    flex: 1,
  },
  horizontalCard: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.m3ReadOnlyLightSurface3,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 2,
    elevation: 2,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    overflow: "hidden",
    alignSelf: "stretch",
  },
  badgesbadge1: {
    backgroundColor: Color.orange,
  },
  myitems: {
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default MyItems2;
