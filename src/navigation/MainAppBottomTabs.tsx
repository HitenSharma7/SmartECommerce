import { StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CartScreen from '../screens/cart/CartScreen';

import { AppColors } from '../styles/color';
import { s, vs } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarLabelStyle: {
          marginTop: vs(4),
          fontSize: s(14),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="cart"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});