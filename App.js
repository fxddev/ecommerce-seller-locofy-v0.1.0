const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import JoinPage1 from "./screens/JoinPage1";
import JoinPage2 from "./screens/JoinPage2";
import Home from "./screens/Home";
import Products from "./screens/Products";
import ActiveProducts from "./screens/ActiveProducts";
import NonActiveProducts from "./screens/NonActiveProducts";
import ProductDetails from "./screens/ProductDetails";
import ProfilePage1 from "./screens/ProfilePage1";
import ProfilePage2 from "./screens/ProfilePage2";
import NavigationDrawer from "./screens/NavigationDrawer";
import Drawer1 from "./screens/Drawer1";
import FrameScreen from "./screens/FrameScreen";
import Home1 from "./screens/Home1";
import DarkSegment3 from "./components/DarkSegment3";
import DarkSegment2 from "./components/DarkSegment2";
import DarkSegment1 from "./components/DarkSegment1";
import DarkSegment from "./components/DarkSegment";
import TopAppBar1 from "./components/TopAppBar1";
import TopAppBar from "./components/TopAppBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 360 } }}
      drawerContent={(props) => <NavigationDrawer {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
      <Drawer.Screen
        name="ProfilePage1"
        component={ProfilePage1}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <DarkSegment2 />,
    <DarkSegment />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <DarkSegment3 />,
    <DarkSegment1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#1c1b1f",
              height: 70,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={(props) => ({
          headerShown: true,
          header: () => <TopAppBar1 />,
        })}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinPage1"
              component={JoinPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinPage2"
              component={JoinPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ActiveProducts" component={ActiveProducts} />
            <Stack.Screen
              name="NonActiveProducts"
              component={NonActiveProducts}
              options={(props) => ({
                headerShown: true,
                header: () => <TopAppBar />,
              })}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage2"
              component={ProfilePage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Drawer"
              component={Drawer1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
