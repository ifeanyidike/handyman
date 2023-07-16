import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';
import { ButtonStyle } from '../styles/utils';

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
    backgroundColor = colors.primaryColor,
    additionalStyle = {},
  } = props;

  return (
    <View style={[styles.container, additionalStyle]}>
      <ButtonStyle
        style={styles.button}
        onPress={onPress}
        backgroundColor={backgroundColor}
        width={customWidth}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </ButtonStyle>
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
    shadowOffset: {
      width: 10,
      height: 1,
    },
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Urbanist_800ExtraBold',
  },
});
