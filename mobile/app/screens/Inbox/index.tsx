import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoTitle from '../../components/LogoTitle';
import { defaultContainer } from '../../utils/general';
import ChatLog from './ChatLog';
import CallLog from './CallLog';

const Tab = createMaterialTopTabNavigator();
const Inbox = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LogoTitle title="Inbox" />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: styles.navigator,
          }}
        >
          <Tab.Screen name="Chats" component={ChatLog} />
          <Tab.Screen name="Calls" component={CallLog} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;

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
