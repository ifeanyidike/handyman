import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
  additionalStyle?: any;
  customWidth?: number | string;
  textColor?: string;
}

const { width } = Dimensions.get('screen');
const Button = (props: Props) => {
  const {
    onPress,
    text,
    customWidth = width - 40,
    textColor = colors.backgroundColor,
    backgroundColor = colors.buttonPrimaryColor,
    additionalStyle = {},
  } = props;

  return (
    <View style={[styles.container, additionalStyle]}>
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor,
            width: customWidth || width - 40,
          },
        ]}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Urbanist_800ExtraBold',
  },
});
