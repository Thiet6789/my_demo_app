import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import StockDetail from './src/screeens/stocks/StockDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//cac tabBootom
//Home

//Stock
import StockScreen from './src/screeens/stocks/StockScreen'
import PortfolioScreen from './src/screeens/portfolio/PortfolioScreen'
import ProfileScreen from './src/screeens/profile/ProfileScreen'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Stock
function StockStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StockScreen"
        component={StockScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StockDetail"
        component={StockDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
//Portfolio
function Portfolio() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="PortfolioScreen"
          component={PortfolioScreen}
          options={{ headerShown: false }}
          />      
    </Stack.Navigator>
  )
}
//Profile
function Profile() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
  )
}
//Tab Natigator Bottom
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // if (route.name === 'Home') {
          //   iconName = focused ? 'home' : 'home-outline';
          // } else 
          if (route.name === 'Stock') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2F52FF',
        tabBarInactiveTintColor: '#C6C6CD',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      {/* <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      /> */}
      <Tab.Screen
        name="Stock"
        component={StockStack}
        options={{
          tabBarLabel: 'Giao dịch',
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: 'Đầu tư',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Tài khoản',
        }}
      />
    </Tab.Navigator>
  )
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


