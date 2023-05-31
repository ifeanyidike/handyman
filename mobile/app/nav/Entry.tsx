import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/Onboarding';
import AuthHome from '../screens/AuthHome';
import SignUp from '../screens/SignUp';
import Login from '../screens/LogIn';
import Profile from '../screens/Profile';
import FingerPrintSetup from '../screens/FingerPrintSetup';
import Main from './Main';
import NotificationsPane from '../screens/NotificationsPane';
import Bookmarks from '../screens/Bookmarks';

const Stack = createNativeStackNavigator();
const Entry = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="AuthHome" component={AuthHome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="FingerPrintSetup" component={FingerPrintSetup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Notifications" component={NotificationsPane} />
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Entry;
