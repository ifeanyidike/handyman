import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Auth from './screens/Auth';

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get('screen');
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Onboarding} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  hero: {
    width: 450,
    height: 450,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '500',
  },
});
