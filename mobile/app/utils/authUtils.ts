import * as LocalAuthentication from 'expo-local-authentication';

export const biometricAuthenticate = async () => {
  const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
  if (!savedBiometrics) return { savedBiometrics };

  const authenticate = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Login with Biometrics',
    disableDeviceFallback: false,
    cancelLabel: 'Cancel',
    fallbackLabel: 'Fallback',
    requireConfirmation: true,
  });

  return { savedBiometrics, isAuthenticated: authenticate.success };
};
