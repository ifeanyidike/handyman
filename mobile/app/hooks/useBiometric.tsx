import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

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
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      setIsBiometricSaved(!!savedBiometrics);
      if (!savedBiometrics) return;

      const authenticate = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        disableDeviceFallback: false,
        cancelLabel: 'Cancel',
        fallbackLabel: 'Fallback',
        requireConfirmation: true,
      });
      setIsAuthenticated(authenticate.success);
    })();
  }, [isBiometricSupported]);

  return { isBiometricSupported, isBiometricSaved, isAuthenticated };
};

export default useBiometric;
