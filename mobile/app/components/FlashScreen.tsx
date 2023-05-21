import {
  Dimensions,
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import React from 'react';
import { colors } from '../utils/generalUtils';

const { width, height } = Dimensions.get('screen');
const FlashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} resizeMode="contain" />

      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={colors.indicatorLoader} />
      </View>
    </View>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    backgroundColor: colors.buttonPrimaryColor,
  },
  indicator: {
    position: 'absolute',
    bottom: 200,
  },
});
