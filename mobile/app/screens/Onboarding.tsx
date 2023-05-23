import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import FlashScreen from '../components/FlashScreen';
import Slider from '../components/Slider';
import Button from '../components/Button';
import { sliderData } from '../utils/pagesUtils';

import * as SplashScreen from 'expo-splash-screen';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../styles/general';
import useLoadFonts from '../hooks/useLoadFonts';

const Onboarding = ({ navigation }: Navigation) => {
  const [showFlashScreen, setShowFlashScreen] = useState(true);
  const fontsLoaded = useLoadFonts();
  useEffect(() => {
    setTimeout(() => {
      setShowFlashScreen(false);
    }, 1000);
  }, []);

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
          <Button onPress={() => navigation.navigate('AuthHome')} text="Next" />
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
});
