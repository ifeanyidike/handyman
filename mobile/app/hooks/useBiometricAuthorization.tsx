import { useEffect, useState } from 'react';
import useBiometric from './useBiometric';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBiometricAuthorization = () => {
  const { isAuthenticated } = useBiometric();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) return;
    AsyncStorage.getItem('handyappuser')
      .then(email => setUserEmail(email))
      .catch(e => console.log('AN error occurred with async storage', e));
  }, [isAuthenticated]);

  return userEmail;
};

export default useBiometricAuthorization;
