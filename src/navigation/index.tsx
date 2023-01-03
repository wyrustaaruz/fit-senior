import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/general/ModalScreen";
import NotFoundScreen from "../screens/general/NotFoundScreen";
import Splash from "../screens/general/Splash";
import Home from "../screens/home/Home";
import Login from "../screens/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList, RootTabParamList } from "../../types";
import Actions from "../redux/actions";
import LinkingConfiguration from "./LinkingConfiguration";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./CustomDrawerContent";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "back",
        drawerStyle: { width: "50%", backgroundColor: Colors.DarkGray },
        overlayColor: "transparent",
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={RootNavigator} />
    </Drawer.Navigator>
  );
}
function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: Colors.PrimaryColor }}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarIconStyle: {},
        tabBarItemStyle: { justifyContent: "center" },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarStyle: { backgroundColor: Colors.PrimaryColor2 },
          tabBarActiveBackgroundColor: 'rgba(0,0,0,0)',
          tabBarInactiveBackgroundColor: Colors.custom.background,
          tabBarActiveTintColor: Colors.PrimaryColor2Dark,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="walk-outline"
                size={25}
                color={
                  tabInfo.focused ? Colors.PrimaryColor2Dark : Colors.custom.tabIconDefault
                }
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const customHeader = {
  headerStyle: {
    backgroundColor: Colors.LightGray,
  },
  headerTintColor: Colors.Gold,
  headerBackTitle: "",
};
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{
          ...customHeader,
          title: "Oops!",
        }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          ...customHeader,
          headerShown: false,
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Giriş Yap",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  console.log("state.authReducers.authToken",useSelector((state: any) => state.authReducers))
  const token = useSelector((state: any) => state.authReducers.authToken);
  const [loading, setLoading] = React.useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Actions.authActions.Init());
    setLoading(false);
  };

  React.useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    );
  }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {token === null ? <AuthStack /> : <MyDrawer />}
    </NavigationContainer>
  );
}
