import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { biometricAuthenticate } from '../utils/authUtils';

const useBiometric = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometricSaved, setIsBiometricSaved] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  useEffect(() => {
    if (!isBiometricSupported) return;

    (async () => {
      const authResult = await biometricAuthenticate();
      const { savedBiometrics, isAuthenticated } = authResult;

      if (!savedBiometrics) return;
      setIsAuthenticated(isAuthenticated);
    })();
  }, [isBiometricSupported]);

  return { isBiometricSupported, isBiometricSaved, isAuthenticated };
};

export default useBiometric;
