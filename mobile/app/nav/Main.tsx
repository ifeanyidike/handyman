import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useExitAppOnBackButton from '../hooks/useExitAppOnBackButton';

import Home from '../screens/Home';
import Bookings from '../screens/Bookings';
import Calendar from '../screens/Calendar';
import Inbox from '../screens/Inbox';
import UserProfile from '../screens/UserProfile';
import HomeIcon from '../assets/icons/Home';
import DocumentIcon from '../assets/icons/Document';
import CalendarIcon from '../assets/icons/Calendar';
import ChatIcon from '../assets/icons/Chat';
import ProfileIcon from '../assets/icons/Profile';
import { colors } from '../utils/generalUtils';

const Tab = createBottomTabNavigator();
const Main = () => {
  useExitAppOnBackButton();
  const getIconFillColor = (focused: boolean) => {
    if (focused) return colors.primaryColor;
    return colors.tabMainColor;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primaryColor,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeIcon fillColor={getIconFillColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ focused }) => (
            <DocumentIcon fillColor={getIconFillColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ focused }) => (
            <CalendarIcon fillColor={getIconFillColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ focused }) => (
            <ChatIcon fillColor={getIconFillColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon fillColor={getIconFillColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
