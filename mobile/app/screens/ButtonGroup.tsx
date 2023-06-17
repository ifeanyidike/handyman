import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { colors } from '../utils/generalUtils';
const { width } = Dimensions.get('screen');
type Props = {
  leftActionBtn: () => void;
  leftActionText: string;

  rightActionBtn: () => void;
  rightActionText: string;
  customWidth?: number;
};
const ButtonGroup = (props: Props) => {
  const customButtonWidth = width / 2 - 20;
  const {
    leftActionBtn,
    leftActionText,
    rightActionBtn,
    rightActionText,
    customWidth = customButtonWidth,
  } = props;
  return (
    <View style={styles.buttonGroup}>
      <Button
        onPress={leftActionBtn}
        text={leftActionText}
        backgroundColor={colors.buttonSecondaryColor}
        textColor={colors.buttonPrimaryColor}
        customWidth={customWidth}
      />
      <Button
        onPress={rightActionBtn}
        text={rightActionText}
        customWidth={customWidth}
      />
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-around',
  },
});
