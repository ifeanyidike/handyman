import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../utils/generalUtils';

interface Props {
  isChecked: boolean;
  toggleCheck: (e: boolean) => void;
}
const CheckBox = (props: Props) => {
  const { isChecked, toggleCheck } = props;
  return (
    <Pressable onPress={() => toggleCheck(!isChecked)} style={styles.container}>
      {isChecked && (
        <FontAwesome name="check" size={21} color={colors.buttonPrimaryColor} />
      )}
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.buttonPrimaryColor,
  },
});
