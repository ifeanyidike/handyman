import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  hasBackground?: boolean;
  isSmall?: boolean;
  text: string;
};
const NavButton = (props: Props) => {
  const { hasBackground, isSmall, text } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        hasBackground && { backgroundColor: colors.buttonPrimaryColor },
        isSmall && { width: 60 },
      ]}
    >
      <Text
        style={[
          styles.text,
          hasBackground && { color: colors.backgroundColor },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.buttonPrimaryColor,
    width: 100,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    color: colors.buttonPrimaryColor,
  },
});
