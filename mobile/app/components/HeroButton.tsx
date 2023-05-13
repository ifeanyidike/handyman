import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
}

const { width } = Dimensions.get('screen');
const HeroButton = (props: Props) => {
  const { onPress, text, backgroundColor = colors.buttonPrimaryColor } = props;
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[styles.button, { backgroundColor }]}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default HeroButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width - 40,
    padding: 15,
    borderRadius: 50,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Urbanist_800ExtraBold',
  },
});
