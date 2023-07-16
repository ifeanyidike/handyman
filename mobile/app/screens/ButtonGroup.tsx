import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { colors } from '../utils/generalUtils';
const { width } = Dimensions.get('screen');

type Action = {
  text: string;
  btn: () => void;
};
type Props = {
  leftAction: Action;
  rightAction: Action;
  customWidth?: number;
};
const ButtonGroup = (props: Props) => {
  const customButtonWidth = width / 2 - 20;
  const { leftAction, rightAction, customWidth = customButtonWidth } = props;
  return (
    <View style={styles.buttonGroup}>
      <Button
        onPress={leftAction.btn}
        text={leftAction.text}
        backgroundColor={colors.secondaryColor}
        textColor={colors.primaryColor}
        customWidth={customWidth}
      />
      <Button
        onPress={rightAction.btn}
        text={rightAction.text}
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
