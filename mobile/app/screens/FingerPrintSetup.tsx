import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { defaultContainer } from '../styles/general';
import BackButton from '../components/BackButton';
import { Navigation } from '../types/basic';
import Button from '../components/Button';
import { colors } from '../utils/generalUtils';
import Dialog from '../components/Dialog';
import { biometricAuthenticate } from '../utils/authUtils';

const { height, width } = Dimensions.get('screen');

const FingerPrintSetup = ({ navigation }: Navigation) => {
  const [finishModalOpen, toggleFinishModal] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(true);
  const [isBiometricSaved, setIsBiometricSaved] = useState(true);
  const customButtonWidth = width / 2 - 20;

  const handleSetupBiometry = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) setIsBiometricSupported(false);

      const authResult = await biometricAuthenticate();
      const { savedBiometrics, isAuthenticated } = authResult;

      if (!savedBiometrics) setIsBiometricSaved(savedBiometrics);

      if (isAuthenticated) {
        await AsyncStorage.setItem('handyappuser', 'ifeanyidike87@gmail.com');
        toggleFinishModal(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!finishModalOpen) return;

    const timer = setTimeout(() => {
      toggleFinishModal(false);
      navigation.navigate('Main');
    }, 2000);

    return () => {
      clearTimeout(timer);
      toggleFinishModal(false);
    };
  }, [finishModalOpen]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton navigation={navigation} title="Set Your Fingerprint" />

        <View style={styles.content}>
          <Text style={[styles.text]}>
            Add a fingerprint to make your account more secure.
          </Text>
          <TouchableOpacity
            style={styles.fingerprint}
            onPress={handleSetupBiometry}
          >
            <Image source={require('../assets/fingerprint.png')} />
          </TouchableOpacity>
          <Text style={[styles.text]}>
            Please put your finger on the fingerprint scanner to get started.
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            onPress={() => toggleFinishModal(true)}
            text="Skip"
            backgroundColor={colors.buttonSecondaryColor}
            textColor={colors.buttonPrimaryColor}
            customWidth={customButtonWidth}
          />
          <Button
            onPress={() => toggleFinishModal(true)}
            text="Continue"
            customWidth={customButtonWidth}
          />
        </View>
      </View>

      {finishModalOpen && (
        <Dialog modalOpen={finishModalOpen} toggleModal={toggleFinishModal}>
          <Image source={require('../assets/person-group.png')} />
          <Text style={[styles.modalText, styles.congrats]}>
            Congratulations!
          </Text>

          <Text style={styles.modalText}>
            Your account is ready to use. You will be redirected to the Homepage
            in a few seconds.
          </Text>

          <ActivityIndicator size="large" color={colors.indicatorLoader} />
        </Dialog>
      )}

      {!isBiometricSupported && (
        <Dialog modalOpen={!isBiometricSupported}>
          <Text style={[styles.modalText, styles.congrats]}>
            Your device does not support biometric authentication
            <Button
              text="Hide modal"
              onPress={() => setIsBiometricSaved(true)}
            />
          </Text>
        </Dialog>
      )}

      {!isBiometricSaved && (
        <Dialog modalOpen={!isBiometricSaved}>
          <Text style={[styles.modalText, styles.congrats]}>
            You have not set up biometry on your device. Please set up biometry
            first.
            <Button
              text="Hide modal"
              onPress={() => setIsBiometricSaved(true)}
            />
          </Text>
        </Dialog>
      )}
    </SafeAreaView>
  );
};

export default FingerPrintSetup;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
  },
  content: {
    height: height - 250,
    justifyContent: 'space-around',
  },
  text: {
    fontFamily: 'Urbanist_400Regular',
    textAlign: 'center',
    marginHorizontal: 40,
  },
  fingerprint: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-around',
  },
  congrats: {
    fontFamily: 'Urbanist_700Bold',
    marginTop: 20,
    fontSize: 18,
    color: colors.buttonPrimaryColor,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Urbanist_400Regular',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196f3',
  },
});
