import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from './Upcoming';
import Completed from './Completed';
import Cancelled from './Cancelled';

const Tab = createMaterialTopTabNavigator();
const Bookings = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Cancelled" component={Cancelled} />
    </Tab.Navigator>
  );
};

export default Bookings;

const styles = StyleSheet.create({});
