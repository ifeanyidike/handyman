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
import SpecialOffersPane from '../screens/SpecialOffersPane';
import PopularServicesPane from '../screens/PopularServicesPane';
import ServicesPane from '../screens/ServicesPane';
import ServiceProvidersList from '../screens/ServiceProvidersList';
import { RootStackParamsList } from '../types/basic';
import Service from '../screens/Service';
import BookingStart from '../screens/PreBookings/BookingStart';

const Stack = createNativeStackNavigator<RootStackParamsList>();
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
        <Stack.Screen name="SpecialOffers" component={SpecialOffersPane} />
        <Stack.Screen name="PopularServices" component={PopularServicesPane} />
        <Stack.Screen name="AllServices" component={ServicesPane} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen
          name="ServiceProviders"
          component={ServiceProvidersList}
        />
        <Stack.Screen name="BookingStart" component={BookingStart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Entry;
