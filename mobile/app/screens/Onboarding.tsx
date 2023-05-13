import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import FlashScreen from '../components/FlashScreen';
import Slider from '../components/Slider';
import HeroButton from '../components/HeroButton';
import { colors } from '../utils/generalUtils';
import { sliderData } from '../utils/pagesUtils';
import { useFonts, Urbanist_800ExtraBold } from '@expo-google-fonts/urbanist';
import * as SplashScreen from 'expo-splash-screen';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../styles/general';

const { width, height } = Dimensions.get('screen');
const Onboarding = ({ navigation }: Navigation) => {
  const [showFlashScreen, setShowFlashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFlashScreen(false);
    }, 1000);
  }, []);

  let [fontsLoaded] = useFonts({
    Urbanist_800ExtraBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView>
      {showFlashScreen ? (
        <FlashScreen />
      ) : (
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Slider data={sliderData} />
          <HeroButton onPress={() => navigation.navigate('Auth')} text="Next" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
  },
  hero: {
    width: 450,
    height: 450,
  },
});
