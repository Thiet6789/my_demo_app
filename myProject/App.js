import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import StockDetail from "./src/screeens/stocks/StockDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//cac tabBootom
//Home
import BankScreen from "./src/screeens/Bank/BankScreen";
import AccountScreen from "./src/screeens/Bank/Account/AccountScreen";
import DetailAccountScreen from "./src/screeens/Bank/Account/DetailAccountScreen";
import TransferScreen from "./src/screeens/Bank/Transfer/TransferScreen";
import TransferNumberAccountScreen from "./src/screeens/Bank/Transfer/TransferNumberAccountScreen";
import HeaderTab from "./src/components/HeaderTab";
//Stock
import StockScreen from "./src/screeens/stocks/StockScreen";
import PortfolioScreen from "./src/screeens/portfolio/PortfolioScreen";
import ProfileScreen from "./src/screeens/profile/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Account
function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab
              handleLeftBtn={() => navigation.goBack()}
              leftBtnIcon="chevron-left"
            >
              Tài khoản
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="DetailAccount"
        component={DetailAccountScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab
              handleLeftBtn={() => navigation.goBack()}
              leftBtnIcon="chevron-left"
            >
              Chi tiết tài khoản
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

function TransferStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab
              handleLeftBtn={() => navigation.goBack()}
              leftBtnIcon="chevron-left"
            >
              Chuyển tiền
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="TransferNumberAccount"
        component={TransferNumberAccountScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab
              handleLeftBtn={() => navigation.goBack()}
              leftBtnIcon="chevron-left"
            >
              Chuyển tiền đến số tài khoản
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

//Home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bank"
        component={BankScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab handleRightBtn={() => {}} rightBtnIcon="bell">
              Trang chủ
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Transfer"
        component={TransferStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

//Stock
function StockStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StockScreen"
        component={StockScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab handleRightBtn={() => {}} rightBtnIcon="bell">
              Giao dịch
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="StockDetail"
        component={StockDetail}
        options={{
          header: ({ navigation }) => (
            <HeaderTab
              handleLeftBtn={() => navigation.goBack()}
              leftBtnIcon="chevron-left"
            >
              Chi tiết mã chứng khoán
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
//Portfolio
function Portfolio() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab handleRightBtn={() => {}} rightBtnIcon="bell">
              Đầu tư
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
//Profile
function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderTab handleRightBtn={() => {}} rightBtnIcon="bell">
              Tài khoản
            </HeaderTab>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

//Tab Natigator Bottom
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Stock") {
            iconName = focused ? "trending-up" : "trending-up-outline";
          } else if (route.name === "Portfolio") {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2F52FF",
        tabBarInactiveTintColor: "#C6C6CD",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          height: 100,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Trang chủ",
        }}
      />
      <Tab.Screen
        name="Stock"
        component={StockStack}
        options={{
          tabBarLabel: "Giao dịch",
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: "Đầu tư",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Tài khoản",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
}
