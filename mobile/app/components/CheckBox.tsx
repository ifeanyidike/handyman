import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../utils/generalUtils';

interface Props {
  isChecked: boolean;
  toggleCheck?: (e: boolean) => void;
  handleCustomToggle?: () => void;
  size?: number;
}
const CheckBox = (props: Props) => {
  const { isChecked, toggleCheck, handleCustomToggle, size = 26 } = props;

  const handlePress = () => {
    if (handleCustomToggle) {
      return handleCustomToggle();
    }
    if (toggleCheck) {
      toggleCheck(!isChecked);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
      ]}
    >
      {isChecked && (
        <FontAwesome name="check" size={size - 5} color={colors.primaryColor} />
      )}
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.primaryColor,
  },
});
