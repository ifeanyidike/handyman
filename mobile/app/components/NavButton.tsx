import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../utils/generalUtils';

type Nav = {
  index: number;
};
type Props = {
  hasBackground?: boolean;
  isSmall?: boolean;
  text: string;
  isClicked?: boolean;
  index?: number;
  toggleNavClicked?: (e: Nav) => void;
};
const NavButton = (props: Props) => {
  const { hasBackground, isSmall, text, toggleNavClicked, index = 0 } = props;

  const handlePress = () => {
    if (toggleNavClicked) {
      toggleNavClicked({ index });
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        hasBackground && { backgroundColor: colors.buttonPrimaryColor },
        isSmall && { width: 60 },
      ]}
      onPress={handlePress}
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
