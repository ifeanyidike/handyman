import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  text: string;
  call: string;
  onPress: () => void;
}
const AuthCall = ({ text, call, onPress }: Props) => {
  return (
    <View style={styles.signupCall}>
      <Text style={styles.signUpCallText}>{text}</Text>
      <Pressable style={styles.signUpCallAction} onPress={onPress}>
        <Text style={styles.callText}>{call}</Text>
      </Pressable>
    </View>
  );
};

export default AuthCall;

const styles = StyleSheet.create({
  signupCall: {
    flexDirection: 'row',
    fontSize: 10,
    fontWeight: '300',
    justifyContent: 'center',
    marginTop: 25,
    gap: 5,
  },
  signUpCallText: {
    color: colors.faintText,
    fontFamily: 'Urbanist_400Regular',
  },
  signUpCallAction: {},
  callText: {
    color: colors.primaryColor,
    fontWeight: '500',
    fontFamily: 'Urbanist_500Medium',
  },
});
