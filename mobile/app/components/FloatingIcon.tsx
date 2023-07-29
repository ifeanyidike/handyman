import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';
import FloatingIconSvg from '../assets/icons/FloatingIconSvg';

type Props = {
  onPress: () => void;
  size?: number;
  bg?: string;
};
const FloatingIcon = (props: Props) => {
  const { onPress, size = 106, bg = colors.primaryColor } = props;
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <FloatingIconSvg size={size} bg={bg} />
    </TouchableOpacity>
  );
};

export default FloatingIcon;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 50,
    right: -20,
    borderRadius: 100,
    zIndex: 999,
  },
});
