import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from './Upcoming';
import Completed from './Completed';
import Cancelled from './Cancelled';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoTitle from '../../components/LogoTitle';
import { defaultContainer } from '../../utils/general';

const Tab = createMaterialTopTabNavigator();
const Bookings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LogoTitle title="My Bookings" />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: styles.navigator,
          }}
        >
          <Tab.Screen name="Upcoming" component={Upcoming} />
          <Tab.Screen name="Completed" component={Completed} />
          <Tab.Screen name="Cancelled" component={Cancelled} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    paddingHorizontal: 20,
  },
  navigator: {
    fontSize: 13,
    textTransform: 'none',
    fontFamily: 'Urbanist_500Medium',
  },
});
