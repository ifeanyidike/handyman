import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBiometricAuthentication = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometric, setIsBiometric] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('handyappuser');
      setIsBiometric(!!user);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!isBiometric) return;
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, [isBiometric]);

  useEffect(() => {
    if (!isBiometricSupported) return;

    (async () => {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) return;

      const authenticate = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        disableDeviceFallback: false,
        cancelLabel: 'Cancel',
        fallbackLabel: 'Fallback',
        requireConfirmation: true,
      });
    })();
  }, [isBiometricSupported]);

  const handleBiometricAuth = async () => {
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Biometrics',
      disableDeviceFallback: false,
      cancelLabel: 'Cancel',
      fallbackLabel: 'Fallback',
      requireConfirmation: true,
    });

    // if (!savedBiometrics) {
    //   return Alert.alert(
    //     'Biometric record not found',
    //     'Please verify your identity with your password',
    //     [
    //       {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //       },
    //       { text: 'OK', onPress: () => console.log('OK Pressed') },
    //     ],
    //     {}
    //   );
    // }
  };
  return (
    <View>
      <Text>useHandleBiometricAuthentication</Text>
    </View>
  );
};

export default useBiometricAuthentication;

const styles = StyleSheet.create({});
