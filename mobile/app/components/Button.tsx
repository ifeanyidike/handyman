import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
      <TouchableOpacity
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
      </TouchableOpacity>
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
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 1,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Urbanist_800ExtraBold',
  },
});
