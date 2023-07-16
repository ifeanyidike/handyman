import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { colors } from '../utils/generalUtils';
const { width } = Dimensions.get('screen');

type Action = {
  text: string;
  btn: () => void;
};

type JustifyContent =
  | 'space-around'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-evenly'
  | undefined;

type Props = {
  leftAction: Action;
  rightAction: Action;
  customWidth?: number;
  padding?: number;
  groupWidth?: number | string;
  justifyType?: JustifyContent;
};
const ButtonGroup = (props: Props) => {
  const customButtonWidth = width / 2 - 20;
  const {
    leftAction,
    rightAction,
    customWidth = customButtonWidth,
    groupWidth = width,
    justifyType = 'space-around',
  } = props;

  return (
    <View
      style={[
        styles.buttonGroup,
        { width: groupWidth, justifyContent: justifyType },
      ]}
    >
      <Button
        onPress={leftAction.btn}
        text={leftAction.text}
        backgroundColor={colors.secondaryColor}
        textColor={colors.primaryColor}
        customWidth={customWidth}
        padding={props.padding}
      />
      <Button
        onPress={rightAction.btn}
        text={rightAction.text}
        customWidth={customWidth}
        padding={props.padding}
      />
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
  },
});
