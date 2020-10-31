/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Dimensions, View} from 'react-native';
import {DumbScreen} from './DumbScreen';

const Tab = createBottomTabNavigator();

const tabIcons: Record<string, string> = {
  Home: 'ios-home',
  Appointments: 'ios-calendar',
  Booking: 'ios-add-circle',
  Chat: 'ios-chatbubbles',
  Profile: 'ios-person-circle',
};

export function TabMenu() {
  return (
    <View
      style={{
        width: "100%",
        height:"100%",
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = tabIcons[route.name] + (focused ? '' : '-outline');

            // You can return any component that you like here!
            return <Icon name={iconName || ''} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0176f4',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={DumbScreen} />
        <Tab.Screen name="Appointments" component={DumbScreen} />
        <Tab.Screen name="Booking" component={DumbScreen} />
        <Tab.Screen name="Chat" component={DumbScreen} />
        <Tab.Screen name="Profile" component={DumbScreen} />
      </Tab.Navigator>
    </View>
  );
}
