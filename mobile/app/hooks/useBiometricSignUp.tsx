import { useEffect } from 'react';
import useBiometric from './useBiometric';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBiometricSignUp = (email: string) => {
  const { isAuthenticated } = useBiometric();

  useEffect(() => {
    try {
      if (!isAuthenticated) return;
      AsyncStorage.setItem('handyappuser', email);
    } catch (error) {
      console.log('error', error);
    }
  }, [isAuthenticated]);

  return isAuthenticated;
};

export default useBiometricSignUp;
